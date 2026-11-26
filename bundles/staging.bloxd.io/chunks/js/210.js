export const id = 210;
export const ids = [210];
export const modules = {
  44385: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      loadGlbAsset: () => qe,
      loadGlbTree: () => je
    });
    var JV = xV(39058),
      YV = xV(44388),
      UV = xV(35081),
      yV = xV.n(UV);

    function pV() {
      return yV()('(()=>{class VV extends Error{}function eV(eV,xV){const JV=eV._malloc(xV);if(0===JV)throw new VV(`Draco: the decoder\'s heap refused ${xV} bytes`);return JV}function xV(VV){return{[VV.DT_FLOAT32]:[Float32Array,5126],[VV.DT_INT8]:[Int8Array,5120],[VV.DT_INT16]:[Int16Array,5122],[VV.DT_INT32]:[Int32Array,5124],[VV.DT_UINT8]:[Uint8Array,5121],[VV.DT_UINT16]:[Uint16Array,5123],[VV.DT_UINT32]:[Uint32Array,5125]}}function JV(eV,JV,YV,UV,yV){let pV=null,QV=null,nV=null;try{pV=new eV.Decoder,QV=new eV.DecoderBuffer,QV.Init(JV,JV.byteLength);let wV=0;const ZV=pV.GetEncodedGeometryType(QV);if(ZV===eV.TRIANGULAR_MESH){const xV=new eV.Mesh;nV=xV;const JV=pV.DecodeBufferToMesh(QV,xV);if(!JV.ok()||0===xV.ptr)throw new VV(JV.error_msg());wV=3*xV.num_faces()}else{if(ZV!==eV.POINT_CLOUD)throw new VV(`Draco: Cannot decode invalid geometry type ${ZV}`);{const xV=new eV.PointCloud;nV=xV;const JV=pV.DecodeBufferToPointCloud(QV,xV);if(!JV.ok()||!xV.ptr)throw new VV(JV.error_msg())}}const vV=nV.num_points();if(vV!==UV.vertices||wV!==UV.indices)throw new VV(`Draco: decoded ${vV} vertices and ${wV} indices, the accessors declare ${UV.vertices} and ${UV.indices}`);const rV=xV(eV),kV=[];for(const{kind:eV,id:xV,components:JV}of YV){const YV=pV.GetAttributeByUniqueId(nV,xV);if(!YV||0===YV.ptr)throw new VV(`Draco: no attribute with id ${xV} (${eV})`);const UV=YV.data_type();if(!rV[UV])throw new VV(`Draco: Cannot decode invalid data type ${UV}`);if(YV.num_components()!==JV)throw new VV(`Draco: ${eV} decodes to ${YV.num_components()} components, its accessor declares ${JV}`);kV.push([eV,YV,UV])}return yV({dracoDecoder:pV,geometry:nV,triangles:ZV===eV.TRIANGULAR_MESH,numPoints:vV,numIndices:wV,attributes:kV})}finally{nV&&eV.destroy(nV),QV&&eV.destroy(QV),pV&&eV.destroy(pV)}}const YV=self;let UV=null;self.onmessage=VV=>{let{data:yV}=VV;if("init"===yV.id){try{importScripts(yV.url),UV=DracoDecoderModule({wasmBinary:yV.wasmBinary}),YV.postMessage({id:"initDone"})}catch(ZV){YV.postMessage({id:"initError",message:ZV instanceof Error?ZV.message:String(ZV)})}return}const{seq:pV,data:QV,attributeIds:nV,expected:wV}=yV;UV?UV.then((VV=>{try{const UV=function(VV,YV,UV,yV){const pV=Object.keys(UV).map((VV=>({kind:VV,id:UV[VV],components:yV.components[VV]})));return JV(VV,YV,pV,yV,(JV=>{let{dracoDecoder:YV,geometry:UV,triangles:yV,numPoints:pV,numIndices:QV,attributes:nV}=JV;const wV=xV(VV);let ZV=null;if(yV){const xV=4*QV,JV=eV(VV,xV);try{YV.GetTrianglesUInt32Array(UV,xV,JV),ZV=new Uint32Array(QV),ZV.set(new Uint32Array(VV.HEAPF32.buffer,JV,QV))}finally{VV._free(JV)}}const vV=[];for(const[xV,rV,kV]of nV){const[JV]=wV[kV],yV=rV.num_components(),QV=pV*yV,nV=QV*JV.BYTES_PER_ELEMENT,ZV=eV(VV,nV);try{YV.GetAttributeDataArrayForAllPoints(UV,rV,kV,nV,ZV),vV.push({kind:xV,data:new JV(VV.HEAPF32.buffer,ZV,QV).slice(),size:yV,byteOffset:rV.byte_offset(),byteStride:rV.byte_stride(),normalized:rV.normalized()})}finally{VV._free(ZV)}}return{indices:ZV,attributes:vV,totalVertices:pV}}))}(VV,QV,nV,wV),yV=UV.attributes.map((VV=>VV.data.buffer));UV.indices&&yV.push(UV.indices.buffer),YV.postMessage({id:"decoded",seq:pV,...UV},yV)}catch(ZV){YV.postMessage({id:"decodeError",seq:pV,message:ZV instanceof Error?ZV.message:String(ZV)})}}),(VV=>{YV.postMessage({id:"decodeError",seq:pV,message:VV instanceof Error?VV.message:String(VV)})})):YV.postMessage({id:"decodeError",seq:pV,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, xV.p + "dracoDecode.worker.dbcd5e37.worker.js")
    }
    var QV = xV(99);
    const nV = 1e3;
    let wV = null,
      ZV = null;
    const vV = [],
      rV = [];
    let kV = 0;
    const bV = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      EV = function(VV, eV) {
        const xV = VV ? Math.max(1, Math.min(Math.floor(.5 * VV), 4)) : 1;
        return eV ? Math.min(xV, 2) : xV
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, QV.isMobile)());

    function BV() {
      if (!wV) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: VV,
        wasmBinaryUrl: eV
      } = wV;
      return ZV ??= fetch(eV).then((VV => {
        if (!VV.ok) throw new Error(`Draco: fetching ${eV} failed: ${VV.status}`);
        return VV.arrayBuffer()
      })), ZV.catch((() => {
        ZV = null
      })), bV.workersStarted++, ZV.then((eV => new Promise(((xV, JV) => {
        const YV = new pV;
        YV.onerror = VV => {
          YV.onmessage = null, YV.onerror = null, YV.terminate(), JV(new Error("Draco: the decode worker failed to start" + (VV.message ? `: ${VV.message}` : " (its script did not load)")))
        }, YV.onmessage = VV => {
          let {
            data: eV
          } = VV;
          YV.onmessage = null, YV.onerror = null, "initDone" === eV.id ? xV(YV) : (YV.terminate(), JV(new Error(`Draco: ${"initError"===eV.id?eV.message:"the worker did not start"}`)))
        };
        const UV = eV.slice(0),
          yV = {
            id: "init",
            url: VV,
            wasmBinary: UV
          };
        YV.postMessage(yV, [UV])
      }))))
    }

    function jV(VV) {
      const eV = vV.indexOf(VV); - 1 !== eV && vV.splice(eV, 1);
      const xV = rV.shift();
      xV && tV(xV)
    }

    function qV(VV, eV) {
      VV.busy = !0, VV.releaseTimer && (clearTimeout(VV.releaseTimer), VV.releaseTimer = null);
      VV.worker.then((xV => {
        const JV = kV++;
        xV.onmessage = YV => {
          let {
            data: UV
          } = YV;
          if (("decoded" === UV.id || "decodeError" === UV.id) && UV.seq === JV) {
            if (xV.onmessage = null, xV.onerror = null, "decoded" === UV.id) return bV.decodes++, eV.resolve({
              indices: UV.indices,
              attributes: UV.attributes,
              totalVertices: UV.totalVertices
            }), void(() => {
              const eV = rV.shift();
              eV ? qV(VV, eV) : (VV.busy = !1, VV.releaseTimer = setTimeout((() => {
                const eV = vV.indexOf(VV); - 1 !== eV && vV.splice(eV, 1), VV.worker.then((VV => {
                  VV.terminate()
                }))
              }), nV))
            })();
            xV.terminate(), eV.reject(new Error(UV.message)), jV(VV)
          }
        }, xV.onerror = JV => {
          xV.onmessage = null, xV.onerror = null, xV.terminate(), eV.reject(new Error(`Draco: the decode worker failed: ${JV.message}`)), jV(VV)
        };
        const YV = {
          id: "decode",
          seq: JV,
          data: eV.data,
          attributeIds: eV.attributeIds,
          expected: eV.expected
        };
        xV.postMessage(YV, [eV.data.buffer])
      }), (xV => {
        eV.reject(xV instanceof Error ? xV : new Error(String(xV))), jV(VV)
      }))
    }

    function tV(VV) {
      const eV = vV.find((VV => !VV.busy));
      if (eV) qV(eV, VV);
      else {
        if (vV.length < EV) {
          const eV = {
            worker: BV(),
            busy: !0,
            releaseTimer: null
          };
          return vV.push(eV), bV.mostWorkers = Math.max(bV.mostWorkers, vV.length), void qV(eV, VV)
        }
        rV.push(VV)
      }
    }

    function FV(VV, eV, xV) {
      return new Promise(((JV, YV) => {
        tV({
          data: new Int8Array(VV.buffer, VV.byteOffset, VV.byteLength).slice(),
          attributeIds: eV,
          expected: xV,
          resolve: JV,
          reject: YV
        })
      }))
    }
    var TV = xV(38542),
      PV = xV(38547),
      AV = xV(35415),
      NV = xV(35408);
    const XV = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function MV(VV) {
      const eV = (0, NV.l)(VV.byteLength);
      if (eV) throw new AV.h(eV);
      const {
        json: xV,
        bin: JV
      } = (0, AV.v)(VV), YV = (0, NV.h)(xV, JV);
      if (YV) throw new AV.h(YV);
      try {
        return function(VV, eV) {
          var xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV;
          const BV = new Map,
            jV = xV => {
              let JV = BV.get(xV);
              if (!JV) {
                var YV;
                const UV = VV.bufferViews[xV],
                  yV = null !== (YV = UV.byteOffset) && void 0 !== YV ? YV : 0;
                JV = {
                  index: xV,
                  bytes: eV.subarray(yV, yV + UV.byteLength),
                  byteStride: UV.byteStride
                }, BV.set(xV, JV)
              }
              return JV
            },
            qV = new Map,
            tV = eV => {
              let xV = qV.get(eV);
              if (!xV) {
                var JV;
                const YV = VV.accessors[eV];
                xV = {
                  index: eV,
                  count: YV.count,
                  type: YV.type,
                  numComponents: AV.l[YV.type],
                  componentType: YV.componentType,
                  normalized: null !== (JV = YV.normalized) && void 0 !== JV && JV,
                  byteOffset: YV.byteOffset,
                  bufferView: void 0 === YV.bufferView ? null : jV(YV.bufferView),
                  min: YV.min,
                  max: YV.max
                }, qV.set(eV, xV)
              }
              return xV
            },
            FV = null !== (xV = null === (JV = VV.extensionsUsed) || void 0 === JV ? void 0 : JV.includes("KHR_draco_mesh_compression")) && void 0 !== xV && xV,
            TV = (null !== (YV = VV.meshes) && void 0 !== YV ? YV : []).map(((eV, xV) => {
              const JV = eV.primitives.map(((eV, xV) => {
                var JV, YV, UV;
                const yV = FV ? null === (JV = eV.extensions) || void 0 === JV ? void 0 : JV.KHR_draco_mesh_compression : void 0;
                let pV = null;
                const QV = [];
                if (yV) {
                  const xV = {
                    vertices: VV.accessors[eV.attributes.POSITION].count,
                    indices: void 0 === eV.indices ? 0 : VV.accessors[eV.indices].count,
                    components: {}
                  };
                  pV = {
                    bufferView: jV(yV.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: xV
                  };
                  for (const [JV, YV] of AV.f) {
                    const UV = yV.attributes[JV];
                    if (void 0 === UV) continue;
                    pV.attributeIds[YV] = UV;
                    const QV = eV.attributes[JV];
                    var nV;
                    if (void 0 !== QV) pV.normalized[YV] = null !== (nV = VV.accessors[QV].normalized) && void 0 !== nV && nV, xV.components[YV] = AV.l[VV.accessors[QV].type]
                  }
                } else
                  for (const [VV, wV] of AV.f) {
                    const xV = eV.attributes[VV];
                    void 0 !== xV && QV.push({
                      semantic: VV,
                      kind: wV,
                      accessor: tV(xV)
                    })
                  }
                return {
                  index: xV,
                  mode: null !== (YV = eV.mode) && void 0 !== YV ? YV : 4,
                  attributes: QV,
                  indices: yV || void 0 === eV.indices ? null : tV(eV.indices),
                  position: void 0 === eV.attributes.POSITION ? null : tV(eV.attributes.POSITION),
                  material: null !== (UV = eV.material) && void 0 !== UV ? UV : null,
                  draco: pV
                }
              }));
              return {
                index: xV,
                name: eV.name,
                primitives: JV,
                extras: eV.extras
              }
            })),
            PV = (null !== (UV = VV.nodes) && void 0 !== UV ? UV : []).map(((VV, eV) => {
              var xV, JV;
              return {
                index: eV,
                name: VV.name,
                children: null !== (xV = VV.children) && void 0 !== xV ? xV : [],
                mesh: null !== (JV = VV.mesh) && void 0 !== JV ? JV : null,
                translation: VV.translation,
                rotation: VV.rotation,
                scale: VV.scale,
                hasCamera: void 0 !== VV.camera,
                extras: VV.extras
              }
            })),
            NV = null !== (yV = null === (pV = VV.extensionsUsed) || void 0 === pV ? void 0 : pV.includes("KHR_materials_unlit")) && void 0 !== yV && yV,
            MV = null !== (QV = null === (nV = VV.extensionsUsed) || void 0 === nV ? void 0 : nV.includes("KHR_texture_transform")) && void 0 !== QV && QV,
            zV = (null !== (wV = VV.materials) && void 0 !== wV ? wV : []).map(((VV, eV) => {
              var xV, JV, YV, UV;
              const yV = VV.pbrMetallicRoughness,
                pV = null === yV || void 0 === yV ? void 0 : yV.baseColorTexture;
              return {
                index: eV,
                name: VV.name,
                extras: VV.extras,
                unlit: NV && void 0 !== (null === (xV = VV.extensions) || void 0 === xV ? void 0 : xV.KHR_materials_unlit),
                pbr: yV ? {
                  baseColorFactor: yV.baseColorFactor,
                  metallicFactor: yV.metallicFactor,
                  roughnessFactor: yV.roughnessFactor
                } : null,
                baseColorTexture: pV ? {
                  texture: pV.index,
                  transform: MV && (null === (JV = pV.extensions) || void 0 === JV ? void 0 : JV.KHR_texture_transform) || null
                } : null,
                emissiveFactor: VV.emissiveFactor,
                alphaMode: null !== (YV = VV.alphaMode) && void 0 !== YV ? YV : "OPAQUE",
                alphaCutoff: VV.alphaCutoff,
                doubleSided: null !== (UV = VV.doubleSided) && void 0 !== UV && UV
              }
            })),
            GV = (null !== (ZV = VV.textures) && void 0 !== ZV ? ZV : []).map(((eV, xV) => {
              var JV, YV;
              const UV = void 0 === eV.sampler ? XV : {
                index: eV.sampler,
                ...null === (JV = VV.samplers) || void 0 === JV ? void 0 : JV[eV.sampler]
              };
              return {
                index: xV,
                sampler: {
                  index: UV.index,
                  magFilter: UV.magFilter,
                  minFilter: UV.minFilter,
                  wrapS: UV.wrapS,
                  wrapT: UV.wrapT
                },
                image: null !== (YV = eV.source) && void 0 !== YV ? YV : -1
              }
            })),
            WV = (null !== (vV = VV.images) && void 0 !== vV ? vV : []).map(((VV, eV) => ({
              index: eV,
              name: VV.name,
              mimeType: VV.mimeType,
              bufferView: jV(VV.bufferView)
            }))),
            RV = null !== (rV = (0, AV.u)(VV)) && void 0 !== rV ? rV : 0;
          return {
            json: VV,
            rootNodes: null !== (kV = null === (bV = VV.scenes) || void 0 === bV || null === (EV = bV[RV]) || void 0 === EV ? void 0 : EV.nodes) && void 0 !== kV ? kV : [],
            nodes: PV,
            meshes: TV,
            materials: zV,
            textures: GV,
            images: WV
          }
        }(xV, JV)
      } catch (UV) {
        throw UV instanceof AV.g ? UV : new AV.g(`reading the GLB failed: ${UV instanceof Error?UV.message:String(UV)}`)
      }
    }
    async function zV(VV, eV) {
      var xV, JV;
      const YV = VV.draco;
      if (!YV) throw new AV.g("not a Draco primitive");
      let UV;
      try {
        UV = await eV(YV.bufferView.bytes, YV.attributeIds, YV.expected)
      } catch (nV) {
        throw new AV.g(`Draco decoding failed: ${nV instanceof Error?nV.message:String(nV)}`)
      }
      const {
        vertices: yV,
        indices: pV,
        components: QV
      } = YV.expected;
      if (UV.totalVertices !== yV || (null !== (xV = null === (JV = UV.indices) || void 0 === JV ? void 0 : JV.length) && void 0 !== xV ? xV : 0) !== pV || UV.attributes.some((VV => VV.size !== QV[VV.kind] || VV.data.length !== yV * VV.size))) throw new AV.g("Draco decoding gave other counts than the accessors declare");
      for (const wV of UV.attributes) {
        const VV = YV.normalized[wV.kind];
        void 0 !== VV && (wV.normalized = VV)
      }
      return UV
    }
    const GV = new WeakMap;

    function WV(VV, eV) {
      var xV;
      const JV = null !== (xV = GV.get(VV)) && void 0 !== xV ? xV : eV(VV);
      return GV.set(VV, JV), JV
    }

    function RV(VV) {
      const eV = VV.bufferView,
        xV = 5125 === VV.componentType ? Uint32Array : Uint16Array,
        JV = eV.bytes.buffer,
        YV = eV.bytes.byteOffset + (VV.byteOffset || 0);
      return YV % xV.BYTES_PER_ELEMENT !== 0 ? new xV(JV.slice(YV, YV + VV.count * xV.BYTES_PER_ELEMENT), 0) : new xV(JV, YV, VV.count)
    }

    function gV(VV, eV) {
      if (VV.min && VV.max) return [new Float64Array(VV.min), new Float64Array(VV.max)];
      const xV = eV.find((VV => {
          let {
            kind: eV
          } = VV;
          return "position" === eV
        })),
        JV = xV ? (0, PV.g)(xV, VV.count) : new Float32Array(0);
      return (0, PV.s)(JV.length / 3, ((VV, eV) => JV[3 * VV + eV]))
    }

    function DV(VV) {
      const eV = VV.attributes.map((VV => {
          var eV, xV;
          let {
            kind: JV,
            accessor: YV
          } = VV;
          const {
            bufferView: UV,
            numComponents: yV
          } = YV;
          if (!UV) {
            return {
              kind: JV,
              data: WV(YV, (() => new Float32Array(yV * YV.count))),
              offset: 0,
              stride: 4 * yV,
              components: yV,
              glType: 5126,
              isNormalized: !1
            }
          }
          const pV = null !== (eV = UV.byteStride) && void 0 !== eV ? eV : yV * AV.b[YV.componentType];
          return {
            kind: JV,
            data: UV.bytes,
            offset: null !== (xV = YV.byteOffset) && void 0 !== xV ? xV : 0,
            stride: pV,
            components: yV,
            glType: YV.componentType,
            isNormalized: YV.normalized
          }
        })),
        xV = VV.indices,
        JV = xV && WV(xV, RV),
        YV = VV.position;
      return new PV.e(eV, JV, YV.count, ...gV(YV, eV))
    }
    const iV = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function CV(VV, eV) {
      const xV = eV.attributes.map((VV => {
        let {
          kind: eV,
          data: xV,
          size: JV,
          byteOffset: YV,
          byteStride: UV,
          normalized: yV
        } = VV;
        return {
          kind: eV,
          data: xV,
          offset: YV,
          stride: UV,
          components: JV,
          glType: 5120 + iV.indexOf(xV.constructor),
          isNormalized: yV
        }
      }));
      return new PV.e(xV, eV.indices, eV.totalVertices, ...gV(VV.position, xV))
    }

    function aV(VV) {
      const eV = VV.lastIndexOf("/");
      return eV < 0 ? VV : VV.substring(eV + 1)
    }

    function oV(VV) {
      const eV = VV.lastIndexOf("/");
      return eV < 0 ? "" : VV.substring(0, eV + 1)
    }

    function cV(VV) {
      return VV.name || `node${VV.index}`
    }
    const hV = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      lV = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      LV = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function fV(VV) {
      var eV, xV, JV, YV;
      const UV = null !== (eV = VV.minFilter) && void 0 !== eV ? eV : 9987;
      return 9729 === (null !== (xV = VV.magFilter) && void 0 !== xV ? xV : 9729) ? null !== (JV = lV[UV]) && void 0 !== JV ? JV : 3 : null !== (YV = LV[UV]) && void 0 !== YV ? YV : 4
    }
    const mV = {
      33071: 0,
      33648: 2
    };

    function KV(VV) {
      var eV;
      return null !== (eV = mV[null !== VV && void 0 !== VV ? VV : 10497]) && void 0 !== eV ? eV : 1
    }

    function HV(VV) {
      return 9728 === VV.minFilter || 9729 === VV.minFilter
    }

    function uV(VV) {
      var eV, xV, JV;
      const YV = Float64Array.from(null !== (eV = VV.scale) && void 0 !== eV ? eV : [1, 1, 1]);
      return VV.hasCamera && (YV[0] = -1), {
        translation: Float64Array.from(null !== (xV = VV.translation) && void 0 !== xV ? xV : [0, 0, 0]),
        rotation: Float64Array.from(null !== (JV = VV.rotation) && void 0 !== JV ? JV : [0, 0, 0, 1]),
        scale: YV
      }
    }

    function sV(VV, eV) {
      let {
        translation: xV,
        rotation: JV,
        scale: YV
      } = VV;
      const UV = new Float32Array(16);
      return (0, TV.d)(YV, 0, JV, 0, xV, 0, UV), eV && (0, TV.s)(UV, eV, 0, UV), UV
    }
    class SV {
      constructor(VV, eV, xV, JV) {
        this.model = VV, this.decode = eV, this.fileInfo = xV, this.uniqueRootUrl = JV, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const YV = new Set,
          UV = (eV, xV) => {
            const JV = VV.nodes[eV];
            if (this.parents.has(JV)) throw new AV.g(`/nodes/${eV}: Invalid recursive node hierarchy`);
            this.parents.set(JV, xV);
            const yV = null === JV.mesh ? [] : VV.meshes[JV.mesh].primitives,
              pV = yV.map((VV => {
                const eV = yV.length > 1;
                return {
                  name: eV ? `${cV(JV)}_primitive${VV.index}` : cV(JV),
                  node: JV,
                  primitive: VV,
                  part: eV,
                  geometry: null
                }
              }));
            this.uses.set(JV, pV);
            const QV = null !== JV.mesh && YV.has(JV.mesh);
            YV.add(JV.mesh), this.own.set(JV, QV ? [] : pV);
            for (const VV of JV.children) UV(VV, JV)
          };
        for (const yV of VV.rootNodes) UV(yV, null);
        this.primitives = VV.nodes.flatMap((VV => {
          var eV;
          return null !== (eV = this.own.get(VV)) && void 0 !== eV ? eV : []
        }))
      }
      decodeGeometries() {
        const VV = new Map;
        return Promise.all(this.primitives.map((async eV => {
          const {
            primitive: xV
          } = eV, JV = xV.draco;
          let YV = JV ? VV.get(JV.bufferView.index) : Promise.resolve(DV(xV));
          YV || (YV = zV(xV, this.decode).then((VV => CV(xV, VV))), VV.set(JV.bufferView.index, YV)), eV.geometry = await YV
        })))
      }
      parentOf(VV) {
        var eV;
        return null !== (eV = this.parents.get(VV)) && void 0 !== eV ? eV : null
      }
      meshesUnder(VV) {
        const eV = this.model.nodes.filter((VV => this.uses.has(VV)));
        for (const JV of eV) {
          const eV = this.uses.get(JV),
            xV = eV.find((eV => eV.name === VV));
          if (xV) return 1 === eV.length ? this.subtree(JV) : this.own.get(JV).includes(xV) ? [xV] : []
        }
        const xV = eV.find((eV => 1 !== this.uses.get(eV).length && cV(eV) === VV));
        return xV ? this.subtree(xV) : null
      }
      subtree(VV) {
        return [...this.own.get(VV), ...VV.children.flatMap((VV => this.subtree(this.model.nodes[VV])))]
      }
      worldMatrix(VV, eV, xV) {
        let JV = sV(uV(eV ? hV : {}), null);
        const YV = [];
        for (let yV = VV.part ? VV.node : this.parentOf(VV.node); yV; yV = this.parentOf(yV)) YV.unshift(yV);
        for (const yV of YV) JV = sV(uV(yV), JV);
        const UV = uV(VV.part ? {} : VV.node);
        return void 0 !== xV && UV.scale.fill(xV), sV(UV, JV)
      }
      floats(VV) {
        const {
          vertexAttributes: eV,
          vertexCount: xV
        } = VV.geometry;
        return new Map(eV.map((VV => [VV.kind, (0, PV.g)(VV, xV)])))
      }
      imageUrl(VV) {
        return function(VV, eV, xV) {
          let {
            name: JV
          } = eV;
          return `data:${VV}${JV}#image${xV}`
        }(this.uniqueRootUrl, this.fileInfo, VV)
      }
      textureDesc(VV, eV) {
        var xV;
        let {
          texture: JV,
          transform: YV
        } = VV;
        const {
          sampler: UV,
          image: yV
        } = this.model.textures[JV], {
          bufferView: pV,
          mimeType: QV,
          name: nV
        } = this.model.images[yV], wV = YV && {
          ...YV.offset ? {
            uOffset: YV.offset[0],
            vOffset: YV.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...YV.rotation ? {
            wAng: -YV.rotation
          } : {},
          ...YV.scale ? {
            uScale: YV.scale[0],
            vScale: YV.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(yV),
          noMipmap: HV(UV),
          invertY: !1,
          samplingMode: fV(UV),
          data: {
            bytes: pV.bytes,
            mimeType: QV,
            label: nV,
            context: `/textures/${JV}`
          },
          sets: {
            wrapU: KV(UV.wrapS),
            wrapV: KV(UV.wrapT),
            ...wV,
            coordinatesIndex: null !== (xV = null === YV || void 0 === YV ? void 0 : YV.texCoord) && void 0 !== xV ? xV : 0,
            hasAlpha: eV
          }
        }
      }
    }
    async function IV(VV, eV, xV, JV, YV, UV) {
      let yV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const pV = function(VV, eV, xV) {
          return "string" !== typeof eV ? {
            url: "",
            rootUrl: VV,
            name: xV()
          } : eV ? eV.startsWith("data:") ? {
            url: eV,
            rootUrl: VV,
            name: ""
          } : VV ? {
            url: VV + eV,
            rootUrl: VV,
            name: eV
          } : {
            url: eV,
            rootUrl: oV(eV),
            name: aV(eV)
          } : {
            url: VV,
            rootUrl: oV(VV),
            name: aV(VV)
          }
        }(xV, VV, YV),
        QV = {};
      eV.addPendingData(QV);
      try {
        const xV = MV(await async function(VV, eV) {
            return "string" !== typeof eV ? eV : VV.url.startsWith("data:") ? (0, AV.o)(VV.url) : await (0, AV.r)(VV.url)
          }(pV, VV)),
          QV = new SV(xV, JV, pV, function(VV, eV) {
            let {
              rootUrl: xV,
              name: JV
            } = VV;
            return !xV.startsWith("file:") && JV ? xV : `${xV}${eV()}/`
          }(pV, YV));
        return await UV(QV), eV.importedMeshesFiles && (eV.loadingPluginName = "ZD", yV && eV.importedMeshesFiles.push(pV.url)), QV
      } finally {
        eV.removePendingData(QV)
      }
    }
    var dV = xV(38662),
      OV = xV(38519),
      Ve = xV(39045);

    function ee(VV) {
      if (null === VV || void 0 === VV || !VV.min || !VV.max) return null;
      const [eV, xV, JV] = VV.min, [YV, UV, yV] = VV.max, {
        BoundingInfo: pV,
        Ik: QV
      } = (0, dV.e)();
      return new pV(new QV(eV, xV, JV), new QV(YV, UV, yV))
    }

    function xe(VV) {
      (0, OV.f)(VV) || (VV.geometry && VV.geometry.useBoundingInfoFromGeometry ? VV._updateBoundingInfo() : VV.refreshBoundingInfo(!0, !0))
    }
    class Je {
      constructor(VV, eV) {
        this.yE = VV, this.decode = eV, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(VV) {
        let eV = this.viewData.get(VV.index);
        return eV || (eV = this.bufferData.then((() => VV.bytes)), this.viewData.set(VV.index, eV)), eV
      }
      viewBuffer(VV) {
        let eV = this.viewBuffers.get(VV.index);
        return eV || (eV = this.viewBytes(VV).then((VV => new((0, dV.e)().nZ)(this.yE.sk(), VV, !1))), this.viewBuffers.set(VV.index, eV)), eV
      }
      vertexBuffer(VV, eV) {
        const {
          kind: xV,
          data: JV
        } = eV, YV = `${VV.index}:${xV}`;
        let UV = this.vertexBuffers.get(YV);
        if (!UV) {
          const yV = VV.bufferView;
          UV = yV ? this.viewBuffer(yV).then((VV => this.layoutVertexBuffer(VV, eV))) : Promise.resolve(JV).then((VV => new((0, dV.e)().VertexBuffer)(this.yE.sk(), VV, xV, !1))), this.vertexBuffers.set(YV, UV)
        }
        return UV
      }
      layoutVertexBuffer(VV, eV) {
        let {
          kind: xV,
          offset: JV,
          stride: YV,
          components: UV,
          glType: yV,
          isNormalized: pV
        } = eV;
        const QV = this.yE.sk();
        return new((0, dV.e)().VertexBuffer)(QV, VV, xV, !1, void 0, YV, void 0, JV, UV, yV, pV, !0, void 0, !0)
      }
      load(VV, eV, xV) {
        const JV = (0, OV.f)(xV),
          YV = VV => {
            JV || (xV._delayInfo = xV._delayInfo || [], -1 === xV._delayInfo.indexOf(VV) && xV._delayInfo.push(VV))
          },
          UV = eV.draco;
        if (UV) {
          for (const VV in UV.attributeIds) YV(VV);
          let yV = this.dracoGeometry.get(UV.bufferView.index);
          return yV || (yV = this.viewBytes(UV.bufferView).then((async () => {
            let YV;
            try {
              YV = await zV(eV, this.decode)
            } catch (QV) {
              throw new AV.g(`${VV}: ${QV instanceof Error?QV.message:String(QV)}`)
            }
            const UV = CV(eV, YV);
            if (JV) return UV;
            const yV = ee(eV.position),
              pV = new((0, dV.e)().MirroredGeometry)(xV.name, this.yE);
            yV && (pV._boundingInfo = yV, pV.useBoundingInfoFromGeometry = !0), UV.indexData && pV.setIndices(UV.indexData);
            for (const VV of UV.vertexAttributes) pV.setVerticesBuffer(this.layoutVertexBuffer(VV.data, VV), UV.vertexCount);
            return pV.link(UV), pV
          })), this.dracoGeometry.set(UV.bufferView.index, yV)), yV
        }
        const yV = [],
          pV = DV(eV);
        if (JV) return xV.isUnIndexed = !pV.indexData, xV.hasVertexAlpha = (0, Ve.f)(eV), Promise.resolve(pV);
        const QV = new((0, dV.e)().MirroredGeometry)(xV.name, this.yE),
          {
            indexData: nV
          } = pV;
        nV ? yV.push(this.viewBytes(eV.indices.bufferView).then((() => {
          QV.setIndices(nV)
        }))) : xV.isUnIndexed = !0;
        for (const [wV, {
            kind: ZV,
            accessor: vV
          }] of eV.attributes.entries()) YV(ZV), yV.push(this.vertexBuffer(vV, pV.vertexAttributes[wV]).then((VV => {
          if ("position" === VV.getKind()) {
            const VV = ee(vV);
            VV && (QV._boundingInfo = VV, QV.useBoundingInfoFromGeometry = !0)
          }
          QV.setVerticesBuffer(VV, pV.vertexCount)
        })));
        return (0, Ve.f)(eV) && (xV.hasVertexAlpha = !0), Promise.all(yV).then((() => (QV.link(pV), QV)))
      }
    }
    var Ye, Ue = xV(38472),
      ye = xV(38263),
      pe = xV(39055),
      Qe = xV(38385),
      ne = xV(38445),
      we = xV(3093),
      Ze = xV(38411);

    function ve(VV, eV) {
      VV.metadata = VV.metadata || {};
      const xV = VV._internalMetadata = VV._internalMetadata || {},
        JV = xV.ZD = xV.ZD || {};
      (JV.pointers = JV.pointers || []).push(eV)
    }

    function re(VV, eV) {
      if (eV && Object.keys(eV).length > 0) {
        const xV = VV.metadata = VV.metadata || {};
        (xV.ZD = xV.ZD || {}).extras = eV
      }
    }

    function ke(VV, eV) {
      eV.position = VV.translation ? ye.Ik.FromArray(VV.translation) : ye.Ik.Zero(), eV.rotationQuaternion = VV.rotation ? ye.Quaternion.FromArray(VV.rotation) : ye.Quaternion.Identity(), eV.WZ = VV.scale ? ye.Ik.FromArray(VV.scale) : ye.Ik.One()
    }
    class be {
      constructor(VV, eV) {
        if (this.yE = VV, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, eV) {
          const eV = VV.sk(),
            xV = VV.eC.add((() => {
              this.dispose()
            })),
            JV = eV.uk.add((() => {
              for (const VV of [...this.geometries, ...this.meshes, ...this.textures]) VV._rebuild()
            }));
          this.release = () => {
            VV.eC.remove(xV), eV.uk.remove(JV)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const VV of this.meshes) this.yE.gYV(VV);
          for (const VV of this.materials) this.yE.addMaterial(VV);
          for (const VV of this.geometries) this.yE.addGeometry(VV);
          for (const VV of this.transformNodes) this.yE.addTransformNode(VV);
          for (const VV of this.textures) this.yE.addTexture(VV)
        }
      }
      dispose() {
        var VV;
        for (const eV of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const VV of eV.slice()) VV.dispose();
          eV.length = 0
        }
        null === (VV = this.release) || void 0 === VV || VV.call(this), this.release = null
      }
    }
    class Ee {
      constructor(VV, eV, xV, JV, YV, UV, yV) {
        this.asset = VV, this.yE = eV, this.tree = xV, this.geometryData = YV, this.materials = UV, this.lite = yV, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = JV ? xV : null
      }
      create(VV) {
        if (this.lite) return VV();
        const eV = this.yE;
        eV._blockEntityCollection = !!this.container;
        try {
          const eV = VV();
          return this.container && (eV._parentContainer = this.container), eV
        } finally {
          eV._blockEntityCollection = !1
        }
      }
      node(VV, eV) {
        return this.create((() => this.lite ? eV ? (0, pe.g)(this.lite, VV) : (0, pe.t)(this.lite, VV) : eV ? new((0, dV.e)().Mesh)(VV, this.yE) : new((0, dV.e)().TransformNode)(VV, this.yE)))
      }
      async load() {
        var VV;
        this.asset.model.json.nodes && this.createRoot();
        const eV = this.lite ? null : this.yE,
          xV = null !== (VV = null === eV || void 0 === eV ? void 0 : eV.blockMaterialDirtyMechanism) && void 0 !== VV && VV;
        let JV;
        eV && (eV.blockMaterialDirtyMechanism = !0);
        try {
          JV = this.loadScene()
        } finally {
          null === eV || void 0 === eV || eV._forceBlockMaterialDirtyMechanism(xV)
        }
        await JV;
        const {
          root: YV,
          tree: UV
        } = this;
        YV && (YV.pW(!0), UV.meshes.push(YV), UV.rootNodes.push(YV));
        for (const pV of this.asset.model.nodes) {
          const VV = this.nodeObjects.get(pV.index);
          VV && ["TransformNode", "LiteNode"].includes(VV.getClassName()) && UV.transformNodes.push(VV);
          for (const eV of null !== (yV = this.nodePrimitives.get(pV.index)) && void 0 !== yV ? yV : []) {
            var yV;
            UV.meshes.push(eV);
            const VV = eV.geometry;
            VV && !UV.geometries.includes(VV) && UV.geometries.push(VV)
          }
        }
      }
      createRoot() {
        const VV = this.node("__root__", !0);
        this.root = VV, VV.pW(!1), this.yE.useRightHandedSystem || ke(hV, VV)
      }
      loadScene() {
        const VV = [];
        for (const eV of this.asset.model.rootNodes) VV.push(this.loadNode(this.asset.model.nodes[eV], (VV => {
          VV.parent = this.root
        })));
        return VV.push(Promise.resolve()), Promise.all(VV).then((() => {}))
      }
      loadNode(VV, eV) {
        const xV = `/nodes/${VV.index}`,
          JV = [],
          YV = YV => {
            if (ve(YV, xV), ke(VV, YV), VV.hasCamera && !this.yE.useRightHandedSystem) {
              const {
                WZ: VV
              } = YV;
              VV.set(-1, VV.y, VV.z)
            }
            for (const eV of VV.children) JV.push(this.loadNode(this.asset.model.nodes[eV], (VV => {
              VV.parent = YV
            })));
            (xV => {
              re(xV, VV.extras), eV(xV)
            })(YV)
          };
        if (null === VV.mesh) {
          const eV = this.node(cV(VV), !1);
          this.nodeObjects.set(VV.index, eV), YV(eV)
        } else {
          const eV = this.asset.model.meshes[VV.mesh];
          JV.push(this.loadMesh(`/meshes/${eV.index}`, VV, eV, YV))
        }
        return Promise.all(JV).then((() => {
          for (const xV of null !== (eV = this.nodePrimitives.get(VV.index)) && void 0 !== eV ? eV : []) {
            var eV;
            xe(xV)
          }
          return this.nodeObjects.get(VV.index)
        }))
      }
      loadMesh(VV, eV, xV, JV) {
        const YV = [],
          UV = cV(eV);
        if (1 === xV.primitives.length) {
          const JV = xV.primitives[0];
          YV.push(this.loadPrimitive(`${VV}/primitives/${JV.index}`, UV, JV, (VV => {
            this.nodeObjects.set(eV.index, VV), this.nodePrimitives.set(eV.index, [VV])
          })))
        } else {
          const JV = this.node(UV, !1);
          this.nodeObjects.set(eV.index, JV);
          const yV = [];
          this.nodePrimitives.set(eV.index, yV);
          for (const eV of xV.primitives) YV.push(this.loadPrimitive(`${VV}/primitives/${eV.index}`, `${UV}_primitive${eV.index}`, eV, (VV => {
            VV.parent = JV, yV.push(VV)
          })))
        }
        const yV = this.nodeObjects.get(eV.index);
        return JV(yV), Promise.all(YV).then((() => yV))
      }
      loadPrimitive(VV, eV, xV, JV) {
        const YV = [],
          UV = this.node(eV, !0);
        if (UV.sideOrientation = this.yE.useRightHandedSystem ? Qe.d.CounterClockWiseSideOrientation : Qe.d.ClockWiseSideOrientation, YV.push(this.geometryData.load(VV, xV, UV).then((VV => {
            if ((0, OV.f)(UV)) {
              var eV, xV;
              const JV = VV;
              UV.replaceModel(JV, Int32Array.of(0, null !== (eV = null === (xV = JV.indexData) || void 0 === xV ? void 0 : xV.length) && void 0 !== eV ? eV : JV.vertexCount, 0, JV.vertexCount))
            } else this.create((() => (VV.applyToMesh(UV), VV)))
          }))), this.materials) {
          const VV = 0 === xV.mode ? Qe.d.PointListDrawMode : Qe.d.TriangleFillMode,
            eV = null === xV.material ? null : this.asset.model.materials[xV.material];
          YV.push(this.loadMaterial(eV, VV, (VV => {
            UV.material = VV
          })))
        }
        return ve(UV, VV), JV(UV), Promise.all(YV).then((() => UV))
      }
      loadMaterial(VV, eV, xV) {
        var JV;
        const YV = `${null!==(JV=null===VV||void 0===VV?void 0:VV.index)&&void 0!==JV?JV:"default"}:${eV}`;
        let UV = this.materialData.get(YV);
        return UV || (UV = this.createMaterial(VV, eV), this.materialData.set(YV, UV)), xV(UV.material), UV.promise
      }
      createMaterial(VV, eV) {
        const xV = VV ? VV.name || `material${VV.index}` : "__GLTFLoader._default",
          {
            style: JV,
            unlit: YV
          } = this.materials;
        let UV;
        const yV = this.create((() => {
          const yV = (0, Ze.e)({
            name: xV,
            yE: this.yE,
            sets: {
              ...(0, Ve.b)(this.asset, VV, JV, YV),
              fillMode: eV
            },
            unrendered: !0
          });
          return UV = yV.model, yV.mirror
        }));
        let pV = Promise.resolve();
        if (VV) {
          const eV = `/materials/${VV.index}`,
            JV = UV.diffuseTexture;
          if (JV && !JV.mirror) pV = new Promise((VV => setTimeout(VV)));
          else if (JV) {
            const YV = JV.mirror;
            YV._parentContainer = this.container, YV.name = `${xV} (Base Color)`, ve(YV, `${eV}${VV.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(YV), pV = (0, ne.r)(JV)
          }
          re(yV, VV.extras), ve(yV, eV)
        }
        return this.tree.materials.push(yV), {
          material: yV,
          promise: pV
        }
      }
    }

    function Be() {
      Ue.e.dracoDecodes = bV.decodes, Ue.e.dracoWorkersStarted = bV.workersStarted, Ue.e.dracoMostWorkers = bV.mostWorkers
    }
    async function je(VV, eV, xV, YV, UV) {
      try {
        return await async function(VV, eV, xV, YV, UV, yV) {
          var pV;
          let QV;
          const nV = null === (pV = (0, we.d)()) || void 0 === pV ? void 0 : pV.gZ,
            wV = null !== nV && void 0 !== nV && nV.jb && eV === nV.dD() ? nV : null,
            ZV = UV && !wV;
          return await IV(VV, eV, xV, YV, JV.d, (VV => (QV = new be(eV, ZV), new Ee(VV, eV, QV, ZV, new Je(eV, YV), yV, wV).load())), !UV), QV
        }(VV, eV, xV, FV, YV, UV)
      } finally {
        Be()
      }
    }
    async function qe(VV, eV, xV, YV) {
      try {
        return await IV(VV, eV, xV, FV, JV.d, (VV => YV(VV, new Je(eV, FV))))
      } finally {
        Be()
      }
    }
    Ye = YV.c, wV || (wV = {
      scriptUrl: new URL(Ye.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Ye.wasmBinaryUrl, location.href).href
    })
  },
  44388: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(138),
      YV = xV(1238);

    function UV(VV) {
      return (0, JV.isDiscordClient)() ? `https://${YV.e.discordDomain}/${VV.href}` : VV.href
    }
    const yV = {
      scriptUrl: UV(new xV.U(xV(44395))),
      wasmBinaryUrl: UV(new xV.U(xV(44404)))
    }
  },
  35081: VV => {
    VV.exports = function(VV, eV, xV, JV) {
      var YV = self || window;
      try {
        try {
          var UV;
          try {
            UV = new YV.Blob([VV])
          } catch (nV) {
            (UV = new(YV.BlobBuilder || YV.WebKitBlobBuilder || YV.MozBlobBuilder || YV.MSBlobBuilder)).append(VV), UV = UV.getBlob()
          }
          var yV = YV.URL || YV.webkitURL,
            pV = yV.createObjectURL(UV),
            QV = new YV[eV](pV, xV);
          return yV.revokeObjectURL(pV), QV
        } catch (nV) {
          return new YV[eV]("data:application/javascript,".concat(encodeURIComponent(VV)), xV)
        }
      } catch (nV) {
        if (!JV) throw Error("Inline worker is not supported");
        return new YV[eV](JV, xV)
      }
    }
  },
  44395: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  44404: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);