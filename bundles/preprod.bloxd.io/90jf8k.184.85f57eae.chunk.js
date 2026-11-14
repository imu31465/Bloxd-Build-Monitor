export const id = 184;
export const ids = [184];
export const modules = {
  39347: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      loadGlbAsset: () => tS,
      loadGlbTree: () => gS
    });
    var CF = SF(36308),
      AF = SF(39354),
      uF = SF(34868),
      hF = SF.n(uF);

    function bW() {
      return hF()('(()=>{class FF extends Error{}function WF(WF,SF){const CF=WF._malloc(SF);if(0===CF)throw new FF(`Draco: the decoder\'s heap refused ${SF} bytes`);return CF}function SF(FF){return{[FF.DT_FLOAT32]:[Float32Array,5126],[FF.DT_INT8]:[Int8Array,5120],[FF.DT_INT16]:[Int16Array,5122],[FF.DT_INT32]:[Int32Array,5124],[FF.DT_UINT8]:[Uint8Array,5121],[FF.DT_UINT16]:[Uint16Array,5123],[FF.DT_UINT32]:[Uint32Array,5125]}}function CF(WF,CF,AF,uF,hF){let bW=null,dF=null,PF=null;try{bW=new WF.Decoder,dF=new WF.DecoderBuffer,dF.Init(CF,CF.byteLength);let RF=0;const iW=bW.GetEncodedGeometryType(dF);if(iW===WF.TRIANGULAR_MESH){const SF=new WF.Mesh;PF=SF;const CF=bW.DecodeBufferToMesh(dF,SF);if(!CF.ok()||0===SF.ptr)throw new FF(CF.error_msg());RF=3*SF.num_faces()}else{if(iW!==WF.POINT_CLOUD)throw new FF(`Draco: Cannot decode invalid geometry type ${iW}`);{const SF=new WF.PointCloud;PF=SF;const CF=bW.DecodeBufferToPointCloud(dF,SF);if(!CF.ok()||!SF.ptr)throw new FF(CF.error_msg())}}const eF=PF.num_points();if(eF!==uF.vertices||RF!==uF.indices)throw new FF(`Draco: decoded ${eF} vertices and ${RF} indices, the accessors declare ${uF.vertices} and ${uF.indices}`);const EF=SF(WF),QF=[];for(const{kind:WF,id:SF,components:CF}of AF){const AF=bW.GetAttributeByUniqueId(PF,SF);if(!AF||0===AF.ptr)throw new FF(`Draco: no attribute with id ${SF} (${WF})`);const uF=AF.data_type();if(!EF[uF])throw new FF(`Draco: Cannot decode invalid data type ${uF}`);if(AF.num_components()!==CF)throw new FF(`Draco: ${WF} decodes to ${AF.num_components()} components, its accessor declares ${CF}`);QF.push([WF,AF,uF])}return hF({dracoDecoder:bW,geometry:PF,triangles:iW===WF.TRIANGULAR_MESH,numPoints:eF,numIndices:RF,attributes:QF})}finally{PF&&WF.destroy(PF),dF&&WF.destroy(dF),bW&&WF.destroy(bW)}}const AF=self;let uF=null;self.onmessage=FF=>{let{data:hF}=FF;if("init"===hF.id){try{importScripts(hF.url),uF=DracoDecoderModule({wasmBinary:hF.wasmBinary}),AF.postMessage({id:"initDone"})}catch(iW){AF.postMessage({id:"initError",message:iW instanceof Error?iW.message:String(iW)})}return}const{seq:bW,data:dF,attributeIds:PF,expected:RF}=hF;uF?uF.then((FF=>{try{const uF=function(FF,AF,uF,hF){const bW=Object.keys(uF).map((FF=>({kind:FF,id:uF[FF],components:hF.components[FF]})));return CF(FF,AF,bW,hF,(CF=>{let{dracoDecoder:AF,geometry:uF,triangles:hF,numPoints:bW,numIndices:dF,attributes:PF}=CF;const RF=SF(FF);let iW=null;if(hF){const SF=4*dF,CF=WF(FF,SF);try{AF.GetTrianglesUInt32Array(uF,SF,CF),iW=new Uint32Array(dF),iW.set(new Uint32Array(FF.HEAPF32.buffer,CF,dF))}finally{FF._free(CF)}}const eF=[];for(const[SF,EF,QF]of PF){const[CF]=RF[QF],hF=EF.num_components(),dF=bW*hF,PF=dF*CF.BYTES_PER_ELEMENT,iW=WF(FF,PF);try{AF.GetAttributeDataArrayForAllPoints(uF,EF,QF,PF,iW),eF.push({kind:SF,data:new CF(FF.HEAPF32.buffer,iW,dF).slice(),size:hF,byteOffset:EF.byte_offset(),byteStride:EF.byte_stride(),normalized:EF.normalized()})}finally{FF._free(iW)}}return{indices:iW,attributes:eF,totalVertices:bW}}))}(FF,dF,PF,RF),hF=uF.attributes.map((FF=>FF.data.buffer));uF.indices&&hF.push(uF.indices.buffer),AF.postMessage({id:"decoded",seq:bW,...uF},hF)}catch(iW){AF.postMessage({id:"decodeError",seq:bW,message:iW instanceof Error?iW.message:String(iW)})}}),(FF=>{AF.postMessage({id:"decodeError",seq:bW,message:FF instanceof Error?FF.message:String(FF)})})):AF.postMessage({id:"decodeError",seq:bW,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, SF.p + "dracoDecode.worker.cf194f6e.worker.js")
    }
    const dF = 1e3;
    let PF = null,
      RF = null;
    const iW = [],
      eF = [];
    let EF = 0;
    const QF = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };

    function rW() {
      if (!PF) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: FF,
        wasmBinaryUrl: WF
      } = PF;
      return RF ??= fetch(WF).then((FF => {
        if (!FF.ok) throw new Error(`Draco: fetching ${WF} failed: ${FF.status}`);
        return FF.arrayBuffer()
      })), RF.catch((() => {
        RF = null
      })), QF.workersStarted++, RF.then((WF => new Promise(((SF, CF) => {
        const AF = new bW;
        AF.onerror = FF => {
          AF.onmessage = null, AF.onerror = null, AF.terminate(), CF(new Error("Draco: the decode worker failed to start" + (FF.message ? `: ${FF.message}` : " (its script did not load)")))
        }, AF.onmessage = FF => {
          let {
            data: WF
          } = FF;
          AF.onmessage = null, AF.onerror = null, "initDone" === WF.id ? SF(AF) : (AF.terminate(), CF(new Error(`Draco: ${"initError"===WF.id?WF.message:"the worker did not start"}`)))
        };
        const uF = WF.slice(0),
          hF = {
            id: "init",
            url: FF,
            wasmBinary: uF
          };
        AF.postMessage(hF, [uF])
      }))))
    }

    function gW(FF) {
      const WF = iW.indexOf(FF); - 1 !== WF && iW.splice(WF, 1);
      const SF = eF.shift();
      SF && TF(SF)
    }

    function tW(FF, WF) {
      FF.busy = !0, FF.releaseTimer && (clearTimeout(FF.releaseTimer), FF.releaseTimer = null);
      FF.worker.then((SF => {
        const CF = EF++;
        SF.onmessage = AF => {
          let {
            data: uF
          } = AF;
          if (("decoded" === uF.id || "decodeError" === uF.id) && uF.seq === CF) {
            if (SF.onmessage = null, SF.onerror = null, "decoded" === uF.id) return QF.decodes++, WF.resolve({
              indices: uF.indices,
              attributes: uF.attributes,
              totalVertices: uF.totalVertices
            }), void(() => {
              const WF = eF.shift();
              WF ? tW(FF, WF) : (FF.busy = !1, FF.releaseTimer = setTimeout((() => {
                const WF = iW.indexOf(FF); - 1 !== WF && iW.splice(WF, 1), FF.worker.then((FF => {
                  FF.terminate()
                }))
              }), dF))
            })();
            SF.terminate(), WF.reject(new Error(uF.message)), gW(FF)
          }
        }, SF.onerror = CF => {
          SF.onmessage = null, SF.onerror = null, SF.terminate(), WF.reject(new Error(`Draco: the decode worker failed: ${CF.message}`)), gW(FF)
        };
        const AF = {
          id: "decode",
          seq: CF,
          data: WF.data,
          attributeIds: WF.attributeIds,
          expected: WF.expected
        };
        SF.postMessage(AF, [WF.data.buffer])
      }), (SF => {
        WF.reject(SF instanceof Error ? SF : new Error(String(SF))), gW(FF)
      }))
    }

    function TF(FF) {
      const WF = iW.find((FF => !FF.busy));
      if (WF) tW(WF, FF);
      else {
        if (iW.length < function() {
            const FF = "object" === typeof navigator ? navigator.hardwareConcurrency : 0;
            return FF ? Math.max(1, Math.min(Math.floor(.5 * FF), 4)) : 1
          }()) {
          const WF = {
            worker: rW(),
            busy: !0,
            releaseTimer: null
          };
          return iW.push(WF), QF.mostWorkers = Math.max(QF.mostWorkers, iW.length), void tW(WF, FF)
        }
        eF.push(FF)
      }
    }

    function aW(FF, WF, SF) {
      return new Promise(((CF, AF) => {
        TF({
          data: new Int8Array(FF.buffer, FF.byteOffset, FF.byteLength).slice(),
          attributeIds: WF,
          expected: SF,
          resolve: CF,
          reject: AF
        })
      }))
    }
    var kW = SF(35808),
      qW = SF(35820),
      VF = SF(32968),
      NF = SF(32964);
    const DF = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function LF(FF) {
      const WF = (0, NF.h)(FF.byteLength);
      if (WF) throw new VF.l(WF);
      const {
        json: SF,
        bin: CF
      } = (0, VF.t)(FF), AF = (0, NF.d)(SF, CF);
      if (AF) throw new VF.l(AF);
      try {
        return function(FF, WF) {
          var SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW;
          const tW = new Map,
            TF = SF => {
              let CF = tW.get(SF);
              if (!CF) {
                var AF;
                const uF = FF.bufferViews[SF],
                  hF = null !== (AF = uF.byteOffset) && void 0 !== AF ? AF : 0;
                CF = {
                  index: SF,
                  bytes: WF.subarray(hF, hF + uF.byteLength),
                  byteStride: uF.byteStride
                }, tW.set(SF, CF)
              }
              return CF
            },
            aW = new Map,
            kW = WF => {
              let SF = aW.get(WF);
              if (!SF) {
                var CF;
                const AF = FF.accessors[WF];
                SF = {
                  index: WF,
                  count: AF.count,
                  type: AF.type,
                  numComponents: VF.n[AF.type],
                  componentType: AF.componentType,
                  normalized: null !== (CF = AF.normalized) && void 0 !== CF && CF,
                  byteOffset: AF.byteOffset,
                  bufferView: void 0 === AF.bufferView ? null : TF(AF.bufferView),
                  min: AF.min,
                  max: AF.max
                }, aW.set(WF, SF)
              }
              return SF
            },
            qW = null !== (SF = null === (CF = FF.extensionsUsed) || void 0 === CF ? void 0 : CF.includes("KHR_draco_mesh_compression")) && void 0 !== SF && SF,
            NF = (null !== (AF = FF.meshes) && void 0 !== AF ? AF : []).map(((WF, SF) => {
              const CF = WF.primitives.map(((WF, SF) => {
                var CF, AF, uF;
                const hF = qW ? null === (CF = WF.extensions) || void 0 === CF ? void 0 : CF.KHR_draco_mesh_compression : void 0;
                let bW = null;
                const dF = [];
                if (hF) {
                  const SF = {
                    vertices: FF.accessors[WF.attributes.POSITION].count,
                    indices: void 0 === WF.indices ? 0 : FF.accessors[WF.indices].count,
                    components: {}
                  };
                  bW = {
                    bufferView: TF(hF.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: SF
                  };
                  for (const [CF, AF] of VF.f) {
                    const uF = hF.attributes[CF];
                    if (void 0 === uF) continue;
                    bW.attributeIds[AF] = uF;
                    const dF = WF.attributes[CF];
                    var PF;
                    if (void 0 !== dF) bW.normalized[AF] = null !== (PF = FF.accessors[dF].normalized) && void 0 !== PF && PF, SF.components[AF] = VF.n[FF.accessors[dF].type]
                  }
                } else
                  for (const [FF, RF] of VF.f) {
                    const SF = WF.attributes[FF];
                    void 0 !== SF && dF.push({
                      semantic: FF,
                      kind: RF,
                      accessor: kW(SF)
                    })
                  }
                return {
                  index: SF,
                  mode: null !== (AF = WF.mode) && void 0 !== AF ? AF : 4,
                  attributes: dF,
                  indices: hF || void 0 === WF.indices ? null : kW(WF.indices),
                  position: void 0 === WF.attributes.POSITION ? null : kW(WF.attributes.POSITION),
                  material: null !== (uF = WF.material) && void 0 !== uF ? uF : null,
                  draco: bW
                }
              }));
              return {
                index: SF,
                name: WF.name,
                primitives: CF,
                extras: WF.extras
              }
            })),
            LF = (null !== (uF = FF.nodes) && void 0 !== uF ? uF : []).map(((FF, WF) => {
              var SF, CF;
              return {
                index: WF,
                name: FF.name,
                children: null !== (SF = FF.children) && void 0 !== SF ? SF : [],
                mesh: null !== (CF = FF.mesh) && void 0 !== CF ? CF : null,
                translation: FF.translation,
                rotation: FF.rotation,
                scale: FF.scale,
                hasCamera: void 0 !== FF.camera,
                extras: FF.extras
              }
            })),
            mW = null !== (hF = null === (bW = FF.extensionsUsed) || void 0 === bW ? void 0 : bW.includes("KHR_materials_unlit")) && void 0 !== hF && hF,
            OF = null !== (dF = null === (PF = FF.extensionsUsed) || void 0 === PF ? void 0 : PF.includes("KHR_texture_transform")) && void 0 !== dF && dF,
            xW = (null !== (RF = FF.materials) && void 0 !== RF ? RF : []).map(((FF, WF) => {
              var SF, CF, AF, uF;
              const hF = FF.pbrMetallicRoughness,
                bW = null === hF || void 0 === hF ? void 0 : hF.baseColorTexture;
              return {
                index: WF,
                name: FF.name,
                extras: FF.extras,
                unlit: mW && void 0 !== (null === (SF = FF.extensions) || void 0 === SF ? void 0 : SF.KHR_materials_unlit),
                pbr: hF ? {
                  baseColorFactor: hF.baseColorFactor,
                  metallicFactor: hF.metallicFactor,
                  roughnessFactor: hF.roughnessFactor
                } : null,
                baseColorTexture: bW ? {
                  texture: bW.index,
                  transform: OF && (null === (CF = bW.extensions) || void 0 === CF ? void 0 : CF.KHR_texture_transform) || null
                } : null,
                emissiveFactor: FF.emissiveFactor,
                alphaMode: null !== (AF = FF.alphaMode) && void 0 !== AF ? AF : "OPAQUE",
                alphaCutoff: FF.alphaCutoff,
                doubleSided: null !== (uF = FF.doubleSided) && void 0 !== uF && uF
              }
            })),
            ZF = (null !== (iW = FF.textures) && void 0 !== iW ? iW : []).map(((WF, SF) => {
              var CF, AF;
              const uF = void 0 === WF.sampler ? DF : {
                index: WF.sampler,
                ...null === (CF = FF.samplers) || void 0 === CF ? void 0 : CF[WF.sampler]
              };
              return {
                index: SF,
                sampler: {
                  index: uF.index,
                  magFilter: uF.magFilter,
                  minFilter: uF.minFilter,
                  wrapS: uF.wrapS,
                  wrapT: uF.wrapT
                },
                image: null !== (AF = WF.source) && void 0 !== AF ? AF : -1
              }
            })),
            oF = (null !== (eF = FF.images) && void 0 !== eF ? eF : []).map(((FF, WF) => ({
              index: WF,
              name: FF.name,
              mimeType: FF.mimeType,
              bufferView: TF(FF.bufferView)
            }))),
            YF = null !== (EF = (0, VF.r)(FF)) && void 0 !== EF ? EF : 0;
          return {
            json: FF,
            rootNodes: null !== (QF = null === (rW = FF.scenes) || void 0 === rW || null === (gW = rW[YF]) || void 0 === gW ? void 0 : gW.nodes) && void 0 !== QF ? QF : [],
            nodes: LF,
            meshes: NF,
            materials: xW,
            textures: ZF,
            images: oF
          }
        }(SF, CF)
      } catch (uF) {
        throw uF instanceof VF.h ? uF : new VF.h(`reading the GLB failed: ${uF instanceof Error?uF.message:String(uF)}`)
      }
    }
    async function mW(FF, WF) {
      var SF, CF;
      const AF = FF.draco;
      if (!AF) throw new VF.h("not a Draco primitive");
      let uF;
      try {
        uF = await WF(AF.bufferView.bytes, AF.attributeIds, AF.expected)
      } catch (PF) {
        throw new VF.h(`Draco decoding failed: ${PF instanceof Error?PF.message:String(PF)}`)
      }
      const {
        vertices: hF,
        indices: bW,
        components: dF
      } = AF.expected;
      if (uF.totalVertices !== hF || (null !== (SF = null === (CF = uF.indices) || void 0 === CF ? void 0 : CF.length) && void 0 !== SF ? SF : 0) !== bW || uF.attributes.some((FF => FF.size !== dF[FF.kind] || FF.data.length !== hF * FF.size))) throw new VF.h("Draco decoding gave other counts than the accessors declare");
      for (const RF of uF.attributes) {
        const FF = AF.normalized[RF.kind];
        void 0 !== FF && (RF.normalized = FF)
      }
      return uF
    }
    const OF = new WeakMap;

    function xW(FF, WF) {
      var SF;
      const CF = null !== (SF = OF.get(FF)) && void 0 !== SF ? SF : WF(FF);
      return OF.set(FF, CF), CF
    }

    function ZF(FF) {
      const WF = FF.bufferView,
        SF = 5125 === FF.componentType ? Uint32Array : Uint16Array,
        CF = WF.bytes.buffer,
        AF = WF.bytes.byteOffset + (FF.byteOffset || 0);
      return AF % SF.BYTES_PER_ELEMENT !== 0 ? new SF(CF.slice(AF, AF + FF.count * SF.BYTES_PER_ELEMENT), 0) : new SF(CF, AF, FF.count)
    }

    function oF(FF, WF) {
      if (FF.min && FF.max) return [new Float64Array(FF.min), new Float64Array(FF.max)];
      const SF = WF.find((FF => {
          let {
            kind: WF
          } = FF;
          return "position" === WF
        })),
        CF = SF ? (0, qW.l)(SF, FF.count) : new Float32Array(0);
      return (0, qW.v)(CF.length / 3, ((FF, WF) => CF[3 * FF + WF]))
    }

    function YF(FF) {
      const WF = FF.attributes.map((FF => {
          var WF, SF;
          let {
            kind: CF,
            accessor: AF
          } = FF;
          const {
            bufferView: uF,
            numComponents: hF
          } = AF;
          if (!uF) {
            return {
              kind: CF,
              data: xW(AF, (() => new Float32Array(hF * AF.count))),
              offset: 0,
              stride: 4 * hF,
              components: hF,
              glType: 5126,
              isNormalized: !1
            }
          }
          const bW = null !== (WF = uF.byteStride) && void 0 !== WF ? WF : hF * VF.c[AF.componentType];
          return {
            kind: CF,
            data: uF.bytes,
            offset: null !== (SF = AF.byteOffset) && void 0 !== SF ? SF : 0,
            stride: bW,
            components: hF,
            glType: AF.componentType,
            isNormalized: AF.normalized
          }
        })),
        SF = FF.indices,
        CF = SF && xW(SF, ZF),
        AF = FF.position;
      return new qW.h(WF, CF, AF.count, ...oF(AF, WF))
    }
    const MF = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function cW(FF, WF) {
      const SF = WF.attributes.map((FF => {
        let {
          kind: WF,
          data: SF,
          size: CF,
          byteOffset: AF,
          byteStride: uF,
          normalized: hF
        } = FF;
        return {
          kind: WF,
          data: SF,
          offset: AF,
          stride: uF,
          components: CF,
          glType: 5120 + MF.indexOf(SF.constructor),
          isNormalized: hF
        }
      }));
      return new qW.h(SF, WF.indices, WF.totalVertices, ...oF(FF.position, SF))
    }

    function GF(FF) {
      const WF = FF.lastIndexOf("/");
      return WF < 0 ? FF : FF.substring(WF + 1)
    }

    function zW(FF) {
      const WF = FF.lastIndexOf("/");
      return WF < 0 ? "" : FF.substring(0, WF + 1)
    }

    function IF(FF) {
      return FF.name || `node${FF.index}`
    }
    const fF = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      yW = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      sF = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function nF(FF) {
      var WF, SF, CF, AF;
      const uF = null !== (WF = FF.minFilter) && void 0 !== WF ? WF : 9987;
      return 9729 === (null !== (SF = FF.magFilter) && void 0 !== SF ? SF : 9729) ? null !== (CF = yW[uF]) && void 0 !== CF ? CF : 3 : null !== (AF = sF[uF]) && void 0 !== AF ? AF : 4
    }
    const HF = {
      33071: 0,
      33648: 2
    };

    function KF(FF) {
      var WF;
      return null !== (WF = HF[null !== FF && void 0 !== FF ? FF : 10497]) && void 0 !== WF ? WF : 1
    }

    function wF(FF) {
      return 9728 === FF.minFilter || 9729 === FF.minFilter
    }

    function XF(FF) {
      var WF, SF, CF;
      const AF = Float64Array.from(null !== (WF = FF.scale) && void 0 !== WF ? WF : [1, 1, 1]);
      return FF.hasCamera && (AF[0] = -1), {
        translation: Float64Array.from(null !== (SF = FF.translation) && void 0 !== SF ? SF : [0, 0, 0]),
        rotation: Float64Array.from(null !== (CF = FF.rotation) && void 0 !== CF ? CF : [0, 0, 0, 1]),
        scale: AF
      }
    }

    function UF(FF, WF) {
      let {
        translation: SF,
        rotation: CF,
        scale: AF
      } = FF;
      const uF = new Float32Array(16);
      return (0, kW.d)(AF, 0, CF, 0, SF, 0, uF), WF && (0, kW.l)(uF, WF, 0, uF), uF
    }
    class BF {
      constructor(FF, WF, SF, CF) {
        this.model = FF, this.decode = WF, this.fileInfo = SF, this.uniqueRootUrl = CF, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const AF = new Set,
          uF = (WF, SF) => {
            const CF = FF.nodes[WF];
            if (this.parents.has(CF)) throw new VF.h(`/nodes/${WF}: Invalid recursive node hierarchy`);
            this.parents.set(CF, SF);
            const hF = null === CF.mesh ? [] : FF.meshes[CF.mesh].primitives,
              bW = hF.map((FF => {
                const WF = hF.length > 1;
                return {
                  name: WF ? `${IF(CF)}_primitive${FF.index}` : IF(CF),
                  node: CF,
                  primitive: FF,
                  part: WF,
                  geometry: null
                }
              }));
            this.uses.set(CF, bW);
            const dF = null !== CF.mesh && AF.has(CF.mesh);
            AF.add(CF.mesh), this.own.set(CF, dF ? [] : bW);
            for (const FF of CF.children) uF(FF, CF)
          };
        for (const hF of FF.rootNodes) uF(hF, null);
        this.primitives = FF.nodes.flatMap((FF => {
          var WF;
          return null !== (WF = this.own.get(FF)) && void 0 !== WF ? WF : []
        }))
      }
      decodeGeometries() {
        const FF = new Map;
        return Promise.all(this.primitives.map((async WF => {
          const {
            primitive: SF
          } = WF, CF = SF.draco;
          let AF = CF ? FF.get(CF.bufferView.index) : Promise.resolve(YF(SF));
          AF || (AF = mW(SF, this.decode).then((FF => cW(SF, FF))), FF.set(CF.bufferView.index, AF)), WF.geometry = await AF
        })))
      }
      parentOf(FF) {
        var WF;
        return null !== (WF = this.parents.get(FF)) && void 0 !== WF ? WF : null
      }
      meshesUnder(FF) {
        const WF = this.model.nodes.filter((FF => this.uses.has(FF)));
        for (const CF of WF) {
          const WF = this.uses.get(CF),
            SF = WF.find((WF => WF.name === FF));
          if (SF) return 1 === WF.length ? this.subtree(CF) : this.own.get(CF).includes(SF) ? [SF] : []
        }
        const SF = WF.find((WF => 1 !== this.uses.get(WF).length && IF(WF) === FF));
        return SF ? this.subtree(SF) : null
      }
      subtree(FF) {
        return [...this.own.get(FF), ...FF.children.flatMap((FF => this.subtree(this.model.nodes[FF])))]
      }
      worldMatrix(FF, WF, SF) {
        let CF = UF(XF(WF ? fF : {}), null);
        const AF = [];
        for (let hF = FF.part ? FF.node : this.parentOf(FF.node); hF; hF = this.parentOf(hF)) AF.unshift(hF);
        for (const hF of AF) CF = UF(XF(hF), CF);
        const uF = XF(FF.part ? {} : FF.node);
        return void 0 !== SF && uF.scale.fill(SF), UF(uF, CF)
      }
      floats(FF) {
        const {
          vertexAttributes: WF,
          vertexCount: SF
        } = FF.geometry;
        return new Map(WF.map((FF => [FF.kind, (0, qW.l)(FF, SF)])))
      }
      imageUrl(FF) {
        return function(FF, WF, SF) {
          let {
            name: CF
          } = WF;
          return `data:${FF}${CF}#image${SF}`
        }(this.uniqueRootUrl, this.fileInfo, FF)
      }
      textureDesc(FF, WF) {
        var SF;
        let {
          texture: CF,
          transform: AF
        } = FF;
        const {
          sampler: uF,
          image: hF
        } = this.model.textures[CF], {
          bufferView: bW,
          mimeType: dF,
          name: PF
        } = this.model.images[hF], RF = AF && {
          ...AF.offset ? {
            uOffset: AF.offset[0],
            vOffset: AF.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...AF.rotation ? {
            wAng: -AF.rotation
          } : {},
          ...AF.scale ? {
            uScale: AF.scale[0],
            vScale: AF.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(hF),
          noMipmap: wF(uF),
          invertY: !1,
          samplingMode: nF(uF),
          data: {
            bytes: bW.bytes,
            mimeType: dF,
            label: PF,
            context: `/textures/${CF}`
          },
          sets: {
            wrapU: KF(uF.wrapS),
            wrapV: KF(uF.wrapT),
            ...RF,
            coordinatesIndex: null !== (SF = null === AF || void 0 === AF ? void 0 : AF.texCoord) && void 0 !== SF ? SF : 0,
            hasAlpha: WF
          }
        }
      }
    }
    async function jW(FF, WF, SF, CF, AF, uF) {
      let hF = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const bW = function(FF, WF, SF) {
          return "string" !== typeof WF ? {
            url: "",
            rootUrl: FF,
            name: SF()
          } : WF ? WF.startsWith("data:") ? {
            url: WF,
            rootUrl: FF,
            name: ""
          } : FF ? {
            url: FF + WF,
            rootUrl: FF,
            name: WF
          } : {
            url: WF,
            rootUrl: zW(WF),
            name: GF(WF)
          } : {
            url: FF,
            rootUrl: zW(FF),
            name: GF(FF)
          }
        }(SF, FF, AF),
        dF = {};
      WF.addPendingData(dF);
      try {
        const SF = LF(await async function(FF, WF) {
            return "string" !== typeof WF ? WF : FF.url.startsWith("data:") ? (0, VF.o)(FF.url) : await (0, VF.p)(FF.url)
          }(bW, FF)),
          dF = new BF(SF, CF, bW, function(FF, WF) {
            let {
              rootUrl: SF,
              name: CF
            } = FF;
            return !SF.startsWith("file:") && CF ? SF : `${SF}${WF()}/`
          }(bW, AF));
        return await uF(dF), WF.importedMeshesFiles && (WF.loadingPluginName = "bRF", hF && WF.importedMeshesFiles.push(bW.url)), dF
      } finally {
        WF.removePendingData(dF)
      }
    }
    var vW = SF(35932),
      JF = SF(35797),
      pF = SF(36288);

    function lF(FF) {
      if (null === FF || void 0 === FF || !FF.min || !FF.max) return null;
      const [WF, SF, CF] = FF.min, [AF, uF, hF] = FF.max, {
        BoundingInfo: bW,
        HC: dF
      } = (0, vW.b)();
      return new bW(new dF(WF, SF, CF), new dF(AF, uF, hF))
    }

    function FW(FF) {
      (0, JF.g)(FF) || (FF.geometry && FF.geometry.useBoundingInfoFromGeometry ? FF._updateBoundingInfo() : FF.refreshBoundingInfo(!0, !0))
    }
    class WW {
      constructor(FF, WF) {
        this.ju = FF, this.decode = WF, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(FF) {
        let WF = this.viewData.get(FF.index);
        return WF || (WF = this.bufferData.then((() => FF.bytes)), this.viewData.set(FF.index, WF)), WF
      }
      viewBuffer(FF) {
        let WF = this.viewBuffers.get(FF.index);
        return WF || (WF = this.viewBytes(FF).then((FF => new((0, vW.b)().NC)(this.ju.sC(), FF, !1))), this.viewBuffers.set(FF.index, WF)), WF
      }
      vertexBuffer(FF, WF) {
        const {
          kind: SF,
          data: CF
        } = WF, AF = `${FF.index}:${SF}`;
        let uF = this.vertexBuffers.get(AF);
        if (!uF) {
          const hF = FF.bufferView;
          uF = hF ? this.viewBuffer(hF).then((FF => this.layoutVertexBuffer(FF, WF))) : Promise.resolve(CF).then((FF => new((0, vW.b)().VertexBuffer)(this.ju.sC(), FF, SF, !1))), this.vertexBuffers.set(AF, uF)
        }
        return uF
      }
      layoutVertexBuffer(FF, WF) {
        let {
          kind: SF,
          offset: CF,
          stride: AF,
          components: uF,
          glType: hF,
          isNormalized: bW
        } = WF;
        const dF = this.ju.sC();
        return new((0, vW.b)().VertexBuffer)(dF, FF, SF, !1, void 0, AF, void 0, CF, uF, hF, bW, !0, void 0, !0)
      }
      load(FF, WF, SF) {
        const CF = (0, JF.g)(SF),
          AF = FF => {
            CF || (SF._delayInfo = SF._delayInfo || [], -1 === SF._delayInfo.indexOf(FF) && SF._delayInfo.push(FF))
          },
          uF = WF.draco;
        if (uF) {
          for (const FF in uF.attributeIds) AF(FF);
          let hF = this.dracoGeometry.get(uF.bufferView.index);
          return hF || (hF = this.viewBytes(uF.bufferView).then((async () => {
            let AF;
            try {
              AF = await mW(WF, this.decode)
            } catch (dF) {
              throw new VF.h(`${FF}: ${dF instanceof Error?dF.message:String(dF)}`)
            }
            const uF = cW(WF, AF);
            if (CF) return uF;
            const hF = lF(WF.position),
              bW = new((0, vW.b)().MirroredGeometry)(SF.name, this.ju);
            hF && (bW._boundingInfo = hF, bW.useBoundingInfoFromGeometry = !0), uF.indexData && bW.setIndices(uF.indexData);
            for (const FF of uF.vertexAttributes) bW.setVerticesBuffer(this.layoutVertexBuffer(FF.data, FF), uF.vertexCount);
            return bW.link(uF), bW
          })), this.dracoGeometry.set(uF.bufferView.index, hF)), hF
        }
        const hF = [],
          bW = YF(WF);
        if (CF) return SF.isUnIndexed = !bW.indexData, SF.hasVertexAlpha = (0, pF.e)(WF), Promise.resolve(bW);
        const dF = new((0, vW.b)().MirroredGeometry)(SF.name, this.ju),
          {
            indexData: PF
          } = bW;
        PF ? hF.push(this.viewBytes(WF.indices.bufferView).then((() => {
          dF.setIndices(PF)
        }))) : SF.isUnIndexed = !0;
        for (const [RF, {
            kind: iW,
            accessor: eF
          }] of WF.attributes.entries()) AF(iW), hF.push(this.vertexBuffer(eF, bW.vertexAttributes[RF]).then((FF => {
          if ("position" === FF.getKind()) {
            const FF = lF(eF);
            FF && (dF._boundingInfo = FF, dF.useBoundingInfoFromGeometry = !0)
          }
          dF.setVerticesBuffer(FF, bW.vertexCount)
        })));
        return (0, pF.e)(WF) && (SF.hasVertexAlpha = !0), Promise.all(hF).then((() => (dF.link(bW), dF)))
      }
    }
    var SW, CW = SF(35737),
      AW = SF(35617),
      uW = SF(36301),
      hW = SF(35664),
      bS = SF(35715),
      dW = SF(2180),
      PW = SF(35702);

    function RW(FF, WF) {
      FF.metadata = FF.metadata || {};
      const SF = FF._internalMetadata = FF._internalMetadata || {},
        CF = SF.bRF = SF.bRF || {};
      (CF.pointers = CF.pointers || []).push(WF)
    }

    function iS(FF, WF) {
      if (WF && Object.keys(WF).length > 0) {
        const SF = FF.metadata = FF.metadata || {};
        (SF.bRF = SF.bRF || {}).extras = WF
      }
    }

    function eW(FF, WF) {
      WF.position = FF.translation ? AW.HC.FromArray(FF.translation) : AW.HC.Zero(), WF.rotationQuaternion = FF.rotation ? AW.Quaternion.FromArray(FF.rotation) : AW.Quaternion.Identity(), WF.Ah = FF.scale ? AW.HC.FromArray(FF.scale) : AW.HC.One()
    }
    class EW {
      constructor(FF, WF) {
        if (this.ju = FF, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, WF) {
          const WF = FF.sC(),
            SF = FF.xSF.add((() => {
              this.dispose()
            })),
            CF = WF.onContextRestoredObservable.add((() => {
              for (const FF of [...this.geometries, ...this.meshes, ...this.textures]) FF._rebuild()
            }));
          this.release = () => {
            FF.xSF.remove(SF), WF.onContextRestoredObservable.remove(CF)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const FF of this.meshes) this.ju.gRF(FF);
          for (const FF of this.materials) this.ju.addMaterial(FF);
          for (const FF of this.geometries) this.ju.addGeometry(FF);
          for (const FF of this.transformNodes) this.ju.addTransformNode(FF);
          for (const FF of this.textures) this.ju.addTexture(FF)
        }
      }
      dispose() {
        var FF;
        for (const WF of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const FF of WF.slice()) FF.dispose();
          WF.length = 0
        }
        null === (FF = this.release) || void 0 === FF || FF.call(this), this.release = null
      }
    }
    class QW {
      constructor(FF, WF, SF, CF, AF, uF, hF) {
        this.asset = FF, this.ju = WF, this.tree = SF, this.geometryData = AF, this.materials = uF, this.lite = hF, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = CF ? SF : null
      }
      create(FF) {
        if (this.lite) return FF();
        const WF = this.ju;
        WF._blockEntityCollection = !!this.container;
        try {
          const WF = FF();
          return this.container && (WF._parentContainer = this.container), WF
        } finally {
          WF._blockEntityCollection = !1
        }
      }
      node(FF, WF) {
        return this.create((() => this.lite ? WF ? (0, uW.h)(this.lite, FF) : (0, uW.x)(this.lite, FF) : WF ? new((0, vW.b)().Mesh)(FF, this.ju) : new((0, vW.b)().TransformNode)(FF, this.ju)))
      }
      async load() {
        var FF;
        this.asset.model.json.nodes && this.createRoot();
        const WF = this.lite ? null : this.ju,
          SF = null !== (FF = null === WF || void 0 === WF ? void 0 : WF.blockMaterialDirtyMechanism) && void 0 !== FF && FF;
        let CF;
        WF && (WF.blockMaterialDirtyMechanism = !0);
        try {
          CF = this.loadScene()
        } finally {
          null === WF || void 0 === WF || WF._forceBlockMaterialDirtyMechanism(SF)
        }
        await CF;
        const {
          root: AF,
          tree: uF
        } = this;
        AF && (AF.MWF(!0), uF.meshes.push(AF), uF.rootNodes.push(AF));
        for (const bW of this.asset.model.nodes) {
          const FF = this.nodeObjects.get(bW.index);
          FF && ["TransformNode", "LiteNode"].includes(FF.getClassName()) && uF.transformNodes.push(FF);
          for (const WF of null !== (hF = this.nodePrimitives.get(bW.index)) && void 0 !== hF ? hF : []) {
            var hF;
            uF.meshes.push(WF);
            const FF = WF.geometry;
            FF && !uF.geometries.includes(FF) && uF.geometries.push(FF)
          }
        }
      }
      createRoot() {
        const FF = this.node("__root__", !0);
        this.root = FF, FF.MWF(!1), this.ju.useRightHandedSystem || eW(fF, FF)
      }
      loadScene() {
        const FF = [];
        for (const WF of this.asset.model.rootNodes) FF.push(this.loadNode(this.asset.model.nodes[WF], (FF => {
          FF.parent = this.root
        })));
        return FF.push(Promise.resolve()), Promise.all(FF).then((() => {}))
      }
      loadNode(FF, WF) {
        const SF = `/nodes/${FF.index}`,
          CF = [],
          AF = AF => {
            if (RW(AF, SF), eW(FF, AF), FF.hasCamera && !this.ju.useRightHandedSystem) {
              const {
                Ah: FF
              } = AF;
              FF.set(-1, FF.y, FF.z)
            }
            for (const WF of FF.children) CF.push(this.loadNode(this.asset.model.nodes[WF], (FF => {
              FF.parent = AF
            })));
            (SF => {
              iS(SF, FF.extras), WF(SF)
            })(AF)
          };
        if (null === FF.mesh) {
          const WF = this.node(IF(FF), !1);
          this.nodeObjects.set(FF.index, WF), AF(WF)
        } else {
          const WF = this.asset.model.meshes[FF.mesh];
          CF.push(this.loadMesh(`/meshes/${WF.index}`, FF, WF, AF))
        }
        return Promise.all(CF).then((() => {
          for (const SF of null !== (WF = this.nodePrimitives.get(FF.index)) && void 0 !== WF ? WF : []) {
            var WF;
            FW(SF)
          }
          return this.nodeObjects.get(FF.index)
        }))
      }
      loadMesh(FF, WF, SF, CF) {
        const AF = [],
          uF = IF(WF);
        if (1 === SF.primitives.length) {
          const CF = SF.primitives[0];
          AF.push(this.loadPrimitive(`${FF}/primitives/${CF.index}`, uF, CF, (FF => {
            this.nodeObjects.set(WF.index, FF), this.nodePrimitives.set(WF.index, [FF])
          })))
        } else {
          const CF = this.node(uF, !1);
          this.nodeObjects.set(WF.index, CF);
          const hF = [];
          this.nodePrimitives.set(WF.index, hF);
          for (const WF of SF.primitives) AF.push(this.loadPrimitive(`${FF}/primitives/${WF.index}`, `${uF}_primitive${WF.index}`, WF, (FF => {
            FF.parent = CF, hF.push(FF)
          })))
        }
        const hF = this.nodeObjects.get(WF.index);
        return CF(hF), Promise.all(AF).then((() => hF))
      }
      loadPrimitive(FF, WF, SF, CF) {
        const AF = [],
          uF = this.node(WF, !0);
        if (uF.sideOrientation = this.ju.useRightHandedSystem ? hW.d.CounterClockWiseSideOrientation : hW.d.ClockWiseSideOrientation, AF.push(this.geometryData.load(FF, SF, uF).then((FF => {
            if ((0, JF.g)(uF)) {
              var WF, SF;
              const CF = FF;
              uF.replaceModel(CF, Int32Array.of(0, null !== (WF = null === (SF = CF.indexData) || void 0 === SF ? void 0 : SF.length) && void 0 !== WF ? WF : CF.vertexCount, 0, CF.vertexCount))
            } else this.create((() => (FF.applyToMesh(uF), FF)))
          }))), this.materials) {
          const FF = 0 === SF.mode ? hW.d.PointListDrawMode : hW.d.TriangleFillMode,
            WF = null === SF.material ? null : this.asset.model.materials[SF.material];
          AF.push(this.loadMaterial(WF, FF, (FF => {
            uF.material = FF
          })))
        }
        return RW(uF, FF), CF(uF), Promise.all(AF).then((() => uF))
      }
      loadMaterial(FF, WF, SF) {
        var CF;
        const AF = `${null!==(CF=null===FF||void 0===FF?void 0:FF.index)&&void 0!==CF?CF:"default"}:${WF}`;
        let uF = this.materialData.get(AF);
        return uF || (uF = this.createMaterial(FF, WF), this.materialData.set(AF, uF)), SF(uF.material), uF.promise
      }
      createMaterial(FF, WF) {
        const SF = FF ? FF.name || `material${FF.index}` : "__GLTFLoader._default",
          {
            style: CF,
            unlit: AF
          } = this.materials;
        let uF;
        const hF = this.create((() => {
          const hF = (0, PW.b)({
            name: SF,
            ju: this.ju,
            sets: {
              ...(0, pF.c)(this.asset, FF, CF, AF),
              fillMode: WF
            },
            unrendered: !0
          });
          return uF = hF.model, hF.mirror
        }));
        let bW = Promise.resolve();
        if (FF) {
          const WF = `/materials/${FF.index}`,
            CF = uF.diffuseTexture;
          if (CF && !CF.mirror) bW = new Promise((FF => setTimeout(FF)));
          else if (CF) {
            const AF = CF.mirror;
            AF._parentContainer = this.container, AF.name = `${SF} (Base Color)`, RW(AF, `${WF}${FF.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(AF), bW = (0, bS.r)(CF)
          }
          iS(hF, FF.extras), RW(hF, WF)
        }
        return this.tree.materials.push(hF), {
          material: hF,
          promise: bW
        }
      }
    }

    function rS() {
      CW.d.dracoDecodes = QF.decodes, CW.d.dracoWorkersStarted = QF.workersStarted, CW.d.dracoMostWorkers = QF.mostWorkers
    }
    async function gS(FF, WF, SF, AF, uF) {
      try {
        return await async function(FF, WF, SF, AF, uF, hF) {
          var bW;
          let dF;
          const PF = null === (bW = (0, dW.h)()) || void 0 === bW ? void 0 : bW.dA,
            RF = null !== PF && void 0 !== PF && PF.PA && WF === PF.OWF() ? PF : null,
            iW = uF && !RF;
          return await jW(FF, WF, SF, AF, CF.b, (FF => (dF = new EW(WF, iW), new QW(FF, WF, dF, iW, new WW(WF, AF), hF, RF).load())), !uF), dF
        }(FF, WF, SF, aW, AF, uF)
      } finally {
        rS()
      }
    }
    async function tS(FF, WF, SF, AF) {
      try {
        return await jW(FF, WF, SF, aW, CF.b, (FF => AF(FF, new WW(WF, aW))))
      } finally {
        rS()
      }
    }
    SW = AF.d, PF || (PF = {
      scriptUrl: new URL(SW.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(SW.wasmBinaryUrl, location.href).href
    })
  },
  39354: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(132),
      AF = SF(1065);

    function uF(FF) {
      return (0, CF.d)() ? `https://${AF.b.discordDomain}/${FF.href}` : FF.href
    }
    const hF = {
      scriptUrl: uF(new SF.U(SF(39361))),
      wasmBinaryUrl: uF(new SF.U(SF(39368)))
    }
  },
  34868: FF => {
    FF.exports = function(FF, WF, SF, CF) {
      var AF = self || window;
      try {
        try {
          var uF;
          try {
            uF = new AF.Blob([FF])
          } catch (PF) {
            (uF = new(AF.BlobBuilder || AF.WebKitBlobBuilder || AF.MozBlobBuilder || AF.MSBlobBuilder)).append(FF), uF = uF.getBlob()
          }
          var hF = AF.URL || AF.webkitURL,
            bW = hF.createObjectURL(uF),
            dF = new AF[WF](bW, SF);
          return hF.revokeObjectURL(bW), dF
        } catch (PF) {
          return new AF[WF]("data:application/javascript,".concat(encodeURIComponent(FF)), SF)
        }
      } catch (PF) {
        if (!CF) throw Error("Inline worker is not supported");
        return new AF[WF](CF, SF)
      }
    }
  },
  39368: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  39361: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);