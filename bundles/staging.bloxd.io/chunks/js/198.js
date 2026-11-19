export const id = 198;
export const ids = [198];
export const modules = {
  40551: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      loadGlbAsset: () => mr,
      loadGlbTree: () => Er
    });
    var FY = DY(37242),
      AY = DY(40555),
      IY = DY(35721),
      RY = DY.n(IY);

    function OY() {
      return RY()('(()=>{class YY extends Error{}function rY(rY,DY){const FY=rY._malloc(DY);if(0===FY)throw new YY(`Draco: the decoder\'s heap refused ${DY} bytes`);return FY}function DY(YY){return{[YY.DT_FLOAT32]:[Float32Array,5126],[YY.DT_INT8]:[Int8Array,5120],[YY.DT_INT16]:[Int16Array,5122],[YY.DT_INT32]:[Int32Array,5124],[YY.DT_UINT8]:[Uint8Array,5121],[YY.DT_UINT16]:[Uint16Array,5123],[YY.DT_UINT32]:[Uint32Array,5125]}}function FY(rY,FY,AY,IY,RY){let OY=null,gY=null,aY=null;try{OY=new rY.Decoder,gY=new rY.DecoderBuffer,gY.Init(FY,FY.byteLength);let vY=0;const uY=OY.GetEncodedGeometryType(gY);if(uY===rY.TRIANGULAR_MESH){const DY=new rY.Mesh;aY=DY;const FY=OY.DecodeBufferToMesh(gY,DY);if(!FY.ok()||0===DY.ptr)throw new YY(FY.error_msg());vY=3*DY.num_faces()}else{if(uY!==rY.POINT_CLOUD)throw new YY(`Draco: Cannot decode invalid geometry type ${uY}`);{const DY=new rY.PointCloud;aY=DY;const FY=OY.DecodeBufferToPointCloud(gY,DY);if(!FY.ok()||!DY.ptr)throw new YY(FY.error_msg())}}const sY=aY.num_points();if(sY!==IY.vertices||vY!==IY.indices)throw new YY(`Draco: decoded ${sY} vertices and ${vY} indices, the accessors declare ${IY.vertices} and ${IY.indices}`);const iY=DY(rY),yY=[];for(const{kind:rY,id:DY,components:FY}of AY){const AY=OY.GetAttributeByUniqueId(aY,DY);if(!AY||0===AY.ptr)throw new YY(`Draco: no attribute with id ${DY} (${rY})`);const IY=AY.data_type();if(!iY[IY])throw new YY(`Draco: Cannot decode invalid data type ${IY}`);if(AY.num_components()!==FY)throw new YY(`Draco: ${rY} decodes to ${AY.num_components()} components, its accessor declares ${FY}`);yY.push([rY,AY,IY])}return RY({dracoDecoder:OY,geometry:aY,triangles:uY===rY.TRIANGULAR_MESH,numPoints:sY,numIndices:vY,attributes:yY})}finally{aY&&rY.destroy(aY),gY&&rY.destroy(gY),OY&&rY.destroy(OY)}}const AY=self;let IY=null;self.onmessage=YY=>{let{data:RY}=YY;if("init"===RY.id){try{importScripts(RY.url),IY=DracoDecoderModule({wasmBinary:RY.wasmBinary}),AY.postMessage({id:"initDone"})}catch(uY){AY.postMessage({id:"initError",message:uY instanceof Error?uY.message:String(uY)})}return}const{seq:OY,data:gY,attributeIds:aY,expected:vY}=RY;IY?IY.then((YY=>{try{const IY=function(YY,AY,IY,RY){const OY=Object.keys(IY).map((YY=>({kind:YY,id:IY[YY],components:RY.components[YY]})));return FY(YY,AY,OY,RY,(FY=>{let{dracoDecoder:AY,geometry:IY,triangles:RY,numPoints:OY,numIndices:gY,attributes:aY}=FY;const vY=DY(YY);let uY=null;if(RY){const DY=4*gY,FY=rY(YY,DY);try{AY.GetTrianglesUInt32Array(IY,DY,FY),uY=new Uint32Array(gY),uY.set(new Uint32Array(YY.HEAPF32.buffer,FY,gY))}finally{YY._free(FY)}}const sY=[];for(const[DY,iY,yY]of aY){const[FY]=vY[yY],RY=iY.num_components(),gY=OY*RY,aY=gY*FY.BYTES_PER_ELEMENT,uY=rY(YY,aY);try{AY.GetAttributeDataArrayForAllPoints(IY,iY,yY,aY,uY),sY.push({kind:DY,data:new FY(YY.HEAPF32.buffer,uY,gY).slice(),size:RY,byteOffset:iY.byte_offset(),byteStride:iY.byte_stride(),normalized:iY.normalized()})}finally{YY._free(uY)}}return{indices:uY,attributes:sY,totalVertices:OY}}))}(YY,gY,aY,vY),RY=IY.attributes.map((YY=>YY.data.buffer));IY.indices&&RY.push(IY.indices.buffer),AY.postMessage({id:"decoded",seq:OY,...IY},RY)}catch(uY){AY.postMessage({id:"decodeError",seq:OY,message:uY instanceof Error?uY.message:String(uY)})}}),(YY=>{AY.postMessage({id:"decodeError",seq:OY,message:YY instanceof Error?YY.message:String(YY)})})):AY.postMessage({id:"decodeError",seq:OY,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, DY.p + "dracoDecode.worker.10342655.worker.js")
    }
    var gY = DY(99);
    const aY = 1e3;
    let vY = null,
      uY = null;
    const sY = [],
      iY = [];
    let yY = 0;
    const QY = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      oY = function(YY, rY) {
        const DY = YY ? Math.max(1, Math.min(Math.floor(.5 * YY), 4)) : 1;
        return rY ? Math.min(DY, 2) : DY
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, gY.isMobile)());

    function WY() {
      if (!vY) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: YY,
        wasmBinaryUrl: rY
      } = vY;
      return uY ??= fetch(rY).then((YY => {
        if (!YY.ok) throw new Error(`Draco: fetching ${rY} failed: ${YY.status}`);
        return YY.arrayBuffer()
      })), uY.catch((() => {
        uY = null
      })), QY.workersStarted++, uY.then((rY => new Promise(((DY, FY) => {
        const AY = new OY;
        AY.onerror = YY => {
          AY.onmessage = null, AY.onerror = null, AY.terminate(), FY(new Error("Draco: the decode worker failed to start" + (YY.message ? `: ${YY.message}` : " (its script did not load)")))
        }, AY.onmessage = YY => {
          let {
            data: rY
          } = YY;
          AY.onmessage = null, AY.onerror = null, "initDone" === rY.id ? DY(AY) : (AY.terminate(), FY(new Error(`Draco: ${"initError"===rY.id?rY.message:"the worker did not start"}`)))
        };
        const IY = rY.slice(0),
          RY = {
            id: "init",
            url: YY,
            wasmBinary: IY
          };
        AY.postMessage(RY, [IY])
      }))))
    }

    function EY(YY) {
      const rY = sY.indexOf(YY); - 1 !== rY && sY.splice(rY, 1);
      const DY = iY.shift();
      DY && VY(DY)
    }

    function mY(YY, rY) {
      YY.busy = !0, YY.releaseTimer && (clearTimeout(YY.releaseTimer), YY.releaseTimer = null);
      YY.worker.then((DY => {
        const FY = yY++;
        DY.onmessage = AY => {
          let {
            data: IY
          } = AY;
          if (("decoded" === IY.id || "decodeError" === IY.id) && IY.seq === FY) {
            if (DY.onmessage = null, DY.onerror = null, "decoded" === IY.id) return QY.decodes++, rY.resolve({
              indices: IY.indices,
              attributes: IY.attributes,
              totalVertices: IY.totalVertices
            }), void(() => {
              const rY = iY.shift();
              rY ? mY(YY, rY) : (YY.busy = !1, YY.releaseTimer = setTimeout((() => {
                const rY = sY.indexOf(YY); - 1 !== rY && sY.splice(rY, 1), YY.worker.then((YY => {
                  YY.terminate()
                }))
              }), aY))
            })();
            DY.terminate(), rY.reject(new Error(IY.message)), EY(YY)
          }
        }, DY.onerror = FY => {
          DY.onmessage = null, DY.onerror = null, DY.terminate(), rY.reject(new Error(`Draco: the decode worker failed: ${FY.message}`)), EY(YY)
        };
        const AY = {
          id: "decode",
          seq: FY,
          data: rY.data,
          attributeIds: rY.attributeIds,
          expected: rY.expected
        };
        DY.postMessage(AY, [rY.data.buffer])
      }), (DY => {
        rY.reject(DY instanceof Error ? DY : new Error(String(DY))), EY(YY)
      }))
    }

    function VY(YY) {
      const rY = sY.find((YY => !YY.busy));
      if (rY) mY(rY, YY);
      else {
        if (sY.length < oY) {
          const rY = {
            worker: WY(),
            busy: !0,
            releaseTimer: null
          };
          return sY.push(rY), QY.mostWorkers = Math.max(QY.mostWorkers, sY.length), void mY(rY, YY)
        }
        iY.push(YY)
      }
    }

    function SY(YY, rY, DY) {
      return new Promise(((FY, AY) => {
        VY({
          data: new Int8Array(YY.buffer, YY.byteOffset, YY.byteLength).slice(),
          attributeIds: rY,
          expected: DY,
          resolve: FY,
          reject: AY
        })
      }))
    }
    var lY = DY(36725),
      TY = DY(36739),
      eY = DY(8809),
      NY = DY(8807);
    const BY = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function cY(YY) {
      const rY = (0, NY.j)(YY.byteLength);
      if (rY) throw new eY.p(rY);
      const {
        json: DY,
        bin: FY
      } = (0, eY.B)(YY), AY = (0, NY.h)(DY, FY);
      if (AY) throw new eY.p(AY);
      try {
        return function(YY, rY) {
          var DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY;
          const WY = new Map,
            EY = DY => {
              let FY = WY.get(DY);
              if (!FY) {
                var AY;
                const IY = YY.bufferViews[DY],
                  RY = null !== (AY = IY.byteOffset) && void 0 !== AY ? AY : 0;
                FY = {
                  index: DY,
                  bytes: rY.subarray(RY, RY + IY.byteLength),
                  byteStride: IY.byteStride
                }, WY.set(DY, FY)
              }
              return FY
            },
            mY = new Map,
            VY = rY => {
              let DY = mY.get(rY);
              if (!DY) {
                var FY;
                const AY = YY.accessors[rY];
                DY = {
                  index: rY,
                  count: AY.count,
                  type: AY.type,
                  numComponents: eY.t[AY.type],
                  componentType: AY.componentType,
                  normalized: null !== (FY = AY.normalized) && void 0 !== FY && FY,
                  byteOffset: AY.byteOffset,
                  bufferView: void 0 === AY.bufferView ? null : EY(AY.bufferView),
                  min: AY.min,
                  max: AY.max
                }, mY.set(rY, DY)
              }
              return DY
            },
            SY = null !== (DY = null === (FY = YY.extensionsUsed) || void 0 === FY ? void 0 : FY.includes("KHR_draco_mesh_compression")) && void 0 !== DY && DY,
            lY = (null !== (AY = YY.meshes) && void 0 !== AY ? AY : []).map(((rY, DY) => {
              const FY = rY.primitives.map(((rY, DY) => {
                var FY, AY, IY;
                const RY = SY ? null === (FY = rY.extensions) || void 0 === FY ? void 0 : FY.KHR_draco_mesh_compression : void 0;
                let OY = null;
                const gY = [];
                if (RY) {
                  const DY = {
                    vertices: YY.accessors[rY.attributes.POSITION].count,
                    indices: void 0 === rY.indices ? 0 : YY.accessors[rY.indices].count,
                    components: {}
                  };
                  OY = {
                    bufferView: EY(RY.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: DY
                  };
                  for (const [FY, AY] of eY.i) {
                    const IY = RY.attributes[FY];
                    if (void 0 === IY) continue;
                    OY.attributeIds[AY] = IY;
                    const gY = rY.attributes[FY];
                    var aY;
                    if (void 0 !== gY) OY.normalized[AY] = null !== (aY = YY.accessors[gY].normalized) && void 0 !== aY && aY, DY.components[AY] = eY.t[YY.accessors[gY].type]
                  }
                } else
                  for (const [YY, vY] of eY.i) {
                    const DY = rY.attributes[YY];
                    void 0 !== DY && gY.push({
                      semantic: YY,
                      kind: vY,
                      accessor: VY(DY)
                    })
                  }
                return {
                  index: DY,
                  mode: null !== (AY = rY.mode) && void 0 !== AY ? AY : 4,
                  attributes: gY,
                  indices: RY || void 0 === rY.indices ? null : VY(rY.indices),
                  position: void 0 === rY.attributes.POSITION ? null : VY(rY.attributes.POSITION),
                  material: null !== (IY = rY.material) && void 0 !== IY ? IY : null,
                  draco: OY
                }
              }));
              return {
                index: DY,
                name: rY.name,
                primitives: FY,
                extras: rY.extras
              }
            })),
            TY = (null !== (IY = YY.nodes) && void 0 !== IY ? IY : []).map(((YY, rY) => {
              var DY, FY;
              return {
                index: rY,
                name: YY.name,
                children: null !== (DY = YY.children) && void 0 !== DY ? DY : [],
                mesh: null !== (FY = YY.mesh) && void 0 !== FY ? FY : null,
                translation: YY.translation,
                rotation: YY.rotation,
                scale: YY.scale,
                hasCamera: void 0 !== YY.camera,
                extras: YY.extras
              }
            })),
            NY = null !== (RY = null === (OY = YY.extensionsUsed) || void 0 === OY ? void 0 : OY.includes("KHR_materials_unlit")) && void 0 !== RY && RY,
            cY = null !== (gY = null === (aY = YY.extensionsUsed) || void 0 === aY ? void 0 : aY.includes("KHR_texture_transform")) && void 0 !== gY && gY,
            KY = (null !== (vY = YY.materials) && void 0 !== vY ? vY : []).map(((YY, rY) => {
              var DY, FY, AY, IY;
              const RY = YY.pbrMetallicRoughness,
                OY = null === RY || void 0 === RY ? void 0 : RY.baseColorTexture;
              return {
                index: rY,
                name: YY.name,
                extras: YY.extras,
                unlit: NY && void 0 !== (null === (DY = YY.extensions) || void 0 === DY ? void 0 : DY.KHR_materials_unlit),
                pbr: RY ? {
                  baseColorFactor: RY.baseColorFactor,
                  metallicFactor: RY.metallicFactor,
                  roughnessFactor: RY.roughnessFactor
                } : null,
                baseColorTexture: OY ? {
                  texture: OY.index,
                  transform: cY && (null === (FY = OY.extensions) || void 0 === FY ? void 0 : FY.KHR_texture_transform) || null
                } : null,
                emissiveFactor: YY.emissiveFactor,
                alphaMode: null !== (AY = YY.alphaMode) && void 0 !== AY ? AY : "OPAQUE",
                alphaCutoff: YY.alphaCutoff,
                doubleSided: null !== (IY = YY.doubleSided) && void 0 !== IY && IY
              }
            })),
            HY = (null !== (uY = YY.textures) && void 0 !== uY ? uY : []).map(((rY, DY) => {
              var FY, AY;
              const IY = void 0 === rY.sampler ? BY : {
                index: rY.sampler,
                ...null === (FY = YY.samplers) || void 0 === FY ? void 0 : FY[rY.sampler]
              };
              return {
                index: DY,
                sampler: {
                  index: IY.index,
                  magFilter: IY.magFilter,
                  minFilter: IY.minFilter,
                  wrapS: IY.wrapS,
                  wrapT: IY.wrapT
                },
                image: null !== (AY = rY.source) && void 0 !== AY ? AY : -1
              }
            })),
            zY = (null !== (sY = YY.images) && void 0 !== sY ? sY : []).map(((YY, rY) => ({
              index: rY,
              name: YY.name,
              mimeType: YY.mimeType,
              bufferView: EY(YY.bufferView)
            }))),
            ZY = null !== (iY = (0, eY.A)(YY)) && void 0 !== iY ? iY : 0;
          return {
            json: YY,
            rootNodes: null !== (yY = null === (QY = YY.scenes) || void 0 === QY || null === (oY = QY[ZY]) || void 0 === oY ? void 0 : oY.nodes) && void 0 !== yY ? yY : [],
            nodes: TY,
            meshes: lY,
            materials: KY,
            textures: HY,
            images: zY
          }
        }(DY, FY)
      } catch (IY) {
        throw IY instanceof eY.l ? IY : new eY.l(`reading the GLB failed: ${IY instanceof Error?IY.message:String(IY)}`)
      }
    }
    async function KY(YY, rY) {
      var DY, FY;
      const AY = YY.draco;
      if (!AY) throw new eY.l("not a Draco primitive");
      let IY;
      try {
        IY = await rY(AY.bufferView.bytes, AY.attributeIds, AY.expected)
      } catch (aY) {
        throw new eY.l(`Draco decoding failed: ${aY instanceof Error?aY.message:String(aY)}`)
      }
      const {
        vertices: RY,
        indices: OY,
        components: gY
      } = AY.expected;
      if (IY.totalVertices !== RY || (null !== (DY = null === (FY = IY.indices) || void 0 === FY ? void 0 : FY.length) && void 0 !== DY ? DY : 0) !== OY || IY.attributes.some((YY => YY.size !== gY[YY.kind] || YY.data.length !== RY * YY.size))) throw new eY.l("Draco decoding gave other counts than the accessors declare");
      for (const vY of IY.attributes) {
        const YY = AY.normalized[vY.kind];
        void 0 !== YY && (vY.normalized = YY)
      }
      return IY
    }
    const HY = new WeakMap;

    function zY(YY, rY) {
      var DY;
      const FY = null !== (DY = HY.get(YY)) && void 0 !== DY ? DY : rY(YY);
      return HY.set(YY, FY), FY
    }

    function ZY(YY) {
      const rY = YY.bufferView,
        DY = 5125 === YY.componentType ? Uint32Array : Uint16Array,
        FY = rY.bytes.buffer,
        AY = rY.bytes.byteOffset + (YY.byteOffset || 0);
      return AY % DY.BYTES_PER_ELEMENT !== 0 ? new DY(FY.slice(AY, AY + YY.count * DY.BYTES_PER_ELEMENT), 0) : new DY(FY, AY, YY.count)
    }

    function CY(YY, rY) {
      if (YY.min && YY.max) return [new Float64Array(YY.min), new Float64Array(YY.max)];
      const DY = rY.find((YY => {
          let {
            kind: rY
          } = YY;
          return "position" === rY
        })),
        FY = DY ? (0, TY.i)(DY, YY.count) : new Float32Array(0);
      return (0, TY.p)(FY.length / 3, ((YY, rY) => FY[3 * YY + rY]))
    }

    function fY(YY) {
      const rY = YY.attributes.map((YY => {
          var rY, DY;
          let {
            kind: FY,
            accessor: AY
          } = YY;
          const {
            bufferView: IY,
            numComponents: RY
          } = AY;
          if (!IY) {
            return {
              kind: FY,
              data: zY(AY, (() => new Float32Array(RY * AY.count))),
              offset: 0,
              stride: 4 * RY,
              components: RY,
              glType: 5126,
              isNormalized: !1
            }
          }
          const OY = null !== (rY = IY.byteStride) && void 0 !== rY ? rY : RY * eY.d[AY.componentType];
          return {
            kind: FY,
            data: IY.bytes,
            offset: null !== (DY = AY.byteOffset) && void 0 !== DY ? DY : 0,
            stride: OY,
            components: RY,
            glType: AY.componentType,
            isNormalized: AY.normalized
          }
        })),
        DY = YY.indices,
        FY = DY && zY(DY, ZY),
        AY = YY.position;
      return new TY.f(rY, FY, AY.count, ...CY(AY, rY))
    }
    const jY = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function hY(YY, rY) {
      const DY = rY.attributes.map((YY => {
        let {
          kind: rY,
          data: DY,
          size: FY,
          byteOffset: AY,
          byteStride: IY,
          normalized: RY
        } = YY;
        return {
          kind: rY,
          data: DY,
          offset: AY,
          stride: IY,
          components: FY,
          glType: 5120 + jY.indexOf(DY.constructor),
          isNormalized: RY
        }
      }));
      return new TY.f(DY, rY.indices, rY.totalVertices, ...CY(YY.position, DY))
    }

    function dY(YY) {
      const rY = YY.lastIndexOf("/");
      return rY < 0 ? YY : YY.substring(rY + 1)
    }

    function JY(YY) {
      const rY = YY.lastIndexOf("/");
      return rY < 0 ? "" : YY.substring(0, rY + 1)
    }

    function MY(YY) {
      return YY.name || `node${YY.index}`
    }
    const wY = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      bY = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      XY = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function qY(YY) {
      var rY, DY, FY, AY;
      const IY = null !== (rY = YY.minFilter) && void 0 !== rY ? rY : 9987;
      return 9729 === (null !== (DY = YY.magFilter) && void 0 !== DY ? DY : 9729) ? null !== (FY = bY[IY]) && void 0 !== FY ? FY : 3 : null !== (AY = XY[IY]) && void 0 !== AY ? AY : 4
    }
    const pY = {
      33071: 0,
      33648: 2
    };

    function kY(YY) {
      var rY;
      return null !== (rY = pY[null !== YY && void 0 !== YY ? YY : 10497]) && void 0 !== rY ? rY : 1
    }

    function GY(YY) {
      return 9728 === YY.minFilter || 9729 === YY.minFilter
    }

    function xY(YY) {
      var rY, DY, FY;
      const AY = Float64Array.from(null !== (rY = YY.scale) && void 0 !== rY ? rY : [1, 1, 1]);
      return YY.hasCamera && (AY[0] = -1), {
        translation: Float64Array.from(null !== (DY = YY.translation) && void 0 !== DY ? DY : [0, 0, 0]),
        rotation: Float64Array.from(null !== (FY = YY.rotation) && void 0 !== FY ? FY : [0, 0, 0, 1]),
        scale: AY
      }
    }

    function nY(YY, rY) {
      let {
        translation: DY,
        rotation: FY,
        scale: AY
      } = YY;
      const IY = new Float32Array(16);
      return (0, lY.b)(AY, 0, FY, 0, DY, 0, IY), rY && (0, lY.j)(IY, rY, 0, IY), IY
    }
    class PY {
      constructor(YY, rY, DY, FY) {
        this.model = YY, this.decode = rY, this.fileInfo = DY, this.uniqueRootUrl = FY, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const AY = new Set,
          IY = (rY, DY) => {
            const FY = YY.nodes[rY];
            if (this.parents.has(FY)) throw new eY.l(`/nodes/${rY}: Invalid recursive node hierarchy`);
            this.parents.set(FY, DY);
            const RY = null === FY.mesh ? [] : YY.meshes[FY.mesh].primitives,
              OY = RY.map((YY => {
                const rY = RY.length > 1;
                return {
                  name: rY ? `${MY(FY)}_primitive${YY.index}` : MY(FY),
                  node: FY,
                  primitive: YY,
                  part: rY,
                  geometry: null
                }
              }));
            this.uses.set(FY, OY);
            const gY = null !== FY.mesh && AY.has(FY.mesh);
            AY.add(FY.mesh), this.own.set(FY, gY ? [] : OY);
            for (const YY of FY.children) IY(YY, FY)
          };
        for (const RY of YY.rootNodes) IY(RY, null);
        this.primitives = YY.nodes.flatMap((YY => {
          var rY;
          return null !== (rY = this.own.get(YY)) && void 0 !== rY ? rY : []
        }))
      }
      decodeGeometries() {
        const YY = new Map;
        return Promise.all(this.primitives.map((async rY => {
          const {
            primitive: DY
          } = rY, FY = DY.draco;
          let AY = FY ? YY.get(FY.bufferView.index) : Promise.resolve(fY(DY));
          AY || (AY = KY(DY, this.decode).then((YY => hY(DY, YY))), YY.set(FY.bufferView.index, AY)), rY.geometry = await AY
        })))
      }
      parentOf(YY) {
        var rY;
        return null !== (rY = this.parents.get(YY)) && void 0 !== rY ? rY : null
      }
      meshesUnder(YY) {
        const rY = this.model.nodes.filter((YY => this.uses.has(YY)));
        for (const FY of rY) {
          const rY = this.uses.get(FY),
            DY = rY.find((rY => rY.name === YY));
          if (DY) return 1 === rY.length ? this.subtree(FY) : this.own.get(FY).includes(DY) ? [DY] : []
        }
        const DY = rY.find((rY => 1 !== this.uses.get(rY).length && MY(rY) === YY));
        return DY ? this.subtree(DY) : null
      }
      subtree(YY) {
        return [...this.own.get(YY), ...YY.children.flatMap((YY => this.subtree(this.model.nodes[YY])))]
      }
      worldMatrix(YY, rY, DY) {
        let FY = nY(xY(rY ? wY : {}), null);
        const AY = [];
        for (let RY = YY.part ? YY.node : this.parentOf(YY.node); RY; RY = this.parentOf(RY)) AY.unshift(RY);
        for (const RY of AY) FY = nY(xY(RY), FY);
        const IY = xY(YY.part ? {} : YY.node);
        return void 0 !== DY && IY.scale.fill(DY), nY(IY, FY)
      }
      floats(YY) {
        const {
          vertexAttributes: rY,
          vertexCount: DY
        } = YY.geometry;
        return new Map(rY.map((YY => [YY.kind, (0, TY.i)(YY, DY)])))
      }
      imageUrl(YY) {
        return function(YY, rY, DY) {
          let {
            name: FY
          } = rY;
          return `data:${YY}${FY}#image${DY}`
        }(this.uniqueRootUrl, this.fileInfo, YY)
      }
      textureDesc(YY, rY) {
        var DY;
        let {
          texture: FY,
          transform: AY
        } = YY;
        const {
          sampler: IY,
          image: RY
        } = this.model.textures[FY], {
          bufferView: OY,
          mimeType: gY,
          name: aY
        } = this.model.images[RY], vY = AY && {
          ...AY.offset ? {
            uOffset: AY.offset[0],
            vOffset: AY.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...AY.rotation ? {
            wAng: -AY.rotation
          } : {},
          ...AY.scale ? {
            uScale: AY.scale[0],
            vScale: AY.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(RY),
          noMipmap: GY(IY),
          invertY: !1,
          samplingMode: qY(IY),
          data: {
            bytes: OY.bytes,
            mimeType: gY,
            label: aY,
            context: `/textures/${FY}`
          },
          sets: {
            wrapU: kY(IY.wrapS),
            wrapV: kY(IY.wrapT),
            ...vY,
            coordinatesIndex: null !== (DY = null === AY || void 0 === AY ? void 0 : AY.texCoord) && void 0 !== DY ? DY : 0,
            hasAlpha: rY
          }
        }
      }
    }
    async function UY(YY, rY, DY, FY, AY, IY) {
      let RY = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const OY = function(YY, rY, DY) {
          return "string" !== typeof rY ? {
            url: "",
            rootUrl: YY,
            name: DY()
          } : rY ? rY.startsWith("data:") ? {
            url: rY,
            rootUrl: YY,
            name: ""
          } : YY ? {
            url: YY + rY,
            rootUrl: YY,
            name: rY
          } : {
            url: rY,
            rootUrl: JY(rY),
            name: dY(rY)
          } : {
            url: YY,
            rootUrl: JY(YY),
            name: dY(YY)
          }
        }(DY, YY, AY),
        gY = {};
      rY.addPendingData(gY);
      try {
        const DY = cY(await async function(YY, rY) {
            return "string" !== typeof rY ? rY : YY.url.startsWith("data:") ? (0, eY.u)(YY.url) : await (0, eY.x)(YY.url)
          }(OY, YY)),
          gY = new PY(DY, FY, OY, function(YY, rY) {
            let {
              rootUrl: DY,
              name: FY
            } = YY;
            return !DY.startsWith("file:") && FY ? DY : `${DY}${rY()}/`
          }(OY, AY));
        return await IY(gY), rY.importedMeshesFiles && (rY.loadingPluginName = "Ul", RY && rY.importedMeshesFiles.push(OY.url)), gY
      } finally {
        rY.removePendingData(gY)
      }
    }
    var LY = DY(36851),
      tY = DY(36700),
      Yr = DY(37231);

    function rr(YY) {
      if (null === YY || void 0 === YY || !YY.min || !YY.max) return null;
      const [rY, DY, FY] = YY.min, [AY, IY, RY] = YY.max, {
        BoundingInfo: OY,
        xy: gY
      } = (0, LY.b)();
      return new OY(new gY(rY, DY, FY), new gY(AY, IY, RY))
    }

    function Dr(YY) {
      (0, tY.g)(YY) || (YY.geometry && YY.geometry.useBoundingInfoFromGeometry ? YY._updateBoundingInfo() : YY.refreshBoundingInfo(!0, !0))
    }
    class Fr {
      constructor(YY, rY) {
        this.LQ = YY, this.decode = rY, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(YY) {
        let rY = this.viewData.get(YY.index);
        return rY || (rY = this.bufferData.then((() => YY.bytes)), this.viewData.set(YY.index, rY)), rY
      }
      viewBuffer(YY) {
        let rY = this.viewBuffers.get(YY.index);
        return rY || (rY = this.viewBytes(YY).then((YY => new((0, LY.b)().Ny)(this.LQ.ky(), YY, !1))), this.viewBuffers.set(YY.index, rY)), rY
      }
      vertexBuffer(YY, rY) {
        const {
          kind: DY,
          data: FY
        } = rY, AY = `${YY.index}:${DY}`;
        let IY = this.vertexBuffers.get(AY);
        if (!IY) {
          const RY = YY.bufferView;
          IY = RY ? this.viewBuffer(RY).then((YY => this.layoutVertexBuffer(YY, rY))) : Promise.resolve(FY).then((YY => new((0, LY.b)().VertexBuffer)(this.LQ.ky(), YY, DY, !1))), this.vertexBuffers.set(AY, IY)
        }
        return IY
      }
      layoutVertexBuffer(YY, rY) {
        let {
          kind: DY,
          offset: FY,
          stride: AY,
          components: IY,
          glType: RY,
          isNormalized: OY
        } = rY;
        const gY = this.LQ.ky();
        return new((0, LY.b)().VertexBuffer)(gY, YY, DY, !1, void 0, AY, void 0, FY, IY, RY, OY, !0, void 0, !0)
      }
      load(YY, rY, DY) {
        const FY = (0, tY.g)(DY),
          AY = YY => {
            FY || (DY._delayInfo = DY._delayInfo || [], -1 === DY._delayInfo.indexOf(YY) && DY._delayInfo.push(YY))
          },
          IY = rY.draco;
        if (IY) {
          for (const YY in IY.attributeIds) AY(YY);
          let RY = this.dracoGeometry.get(IY.bufferView.index);
          return RY || (RY = this.viewBytes(IY.bufferView).then((async () => {
            let AY;
            try {
              AY = await KY(rY, this.decode)
            } catch (gY) {
              throw new eY.l(`${YY}: ${gY instanceof Error?gY.message:String(gY)}`)
            }
            const IY = hY(rY, AY);
            if (FY) return IY;
            const RY = rr(rY.position),
              OY = new((0, LY.b)().MirroredGeometry)(DY.name, this.LQ);
            RY && (OY._boundingInfo = RY, OY.useBoundingInfoFromGeometry = !0), IY.indexData && OY.setIndices(IY.indexData);
            for (const YY of IY.vertexAttributes) OY.setVerticesBuffer(this.layoutVertexBuffer(YY.data, YY), IY.vertexCount);
            return OY.link(IY), OY
          })), this.dracoGeometry.set(IY.bufferView.index, RY)), RY
        }
        const RY = [],
          OY = fY(rY);
        if (FY) return DY.isUnIndexed = !OY.indexData, DY.hasVertexAlpha = (0, Yr.e)(rY), Promise.resolve(OY);
        const gY = new((0, LY.b)().MirroredGeometry)(DY.name, this.LQ),
          {
            indexData: aY
          } = OY;
        aY ? RY.push(this.viewBytes(rY.indices.bufferView).then((() => {
          gY.setIndices(aY)
        }))) : DY.isUnIndexed = !0;
        for (const [vY, {
            kind: uY,
            accessor: sY
          }] of rY.attributes.entries()) AY(uY), RY.push(this.vertexBuffer(sY, OY.vertexAttributes[vY]).then((YY => {
          if ("position" === YY.getKind()) {
            const YY = rr(sY);
            YY && (gY._boundingInfo = YY, gY.useBoundingInfoFromGeometry = !0)
          }
          gY.setVerticesBuffer(YY, OY.vertexCount)
        })));
        return (0, Yr.e)(rY) && (DY.hasVertexAlpha = !0), Promise.all(RY).then((() => (gY.link(OY), gY)))
      }
    }
    var Ar, Ir = DY(36633),
      Rr = DY(36518),
      Or = DY(37239),
      gr = DY(36577),
      ar = DY(36615),
      vr = DY(2501),
      ur = DY(36607);

    function sr(YY, rY) {
      YY.metadata = YY.metadata || {};
      const DY = YY._internalMetadata = YY._internalMetadata || {},
        FY = DY.Ul = DY.Ul || {};
      (FY.pointers = FY.pointers || []).push(rY)
    }

    function ir(YY, rY) {
      if (rY && Object.keys(rY).length > 0) {
        const DY = YY.metadata = YY.metadata || {};
        (DY.Ul = DY.Ul || {}).extras = rY
      }
    }

    function yr(YY, rY) {
      rY.position = YY.translation ? Rr.xy.FromArray(YY.translation) : Rr.xy.Zero(), rY.rotationQuaternion = YY.rotation ? Rr.Quaternion.FromArray(YY.rotation) : Rr.Quaternion.Identity(), rY.pa = YY.scale ? Rr.xy.FromArray(YY.scale) : Rr.xy.One()
    }
    class Qr {
      constructor(YY, rY) {
        if (this.LQ = YY, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, rY) {
          const rY = YY.ky(),
            DY = YY.wT.add((() => {
              this.dispose()
            })),
            FY = rY.onContextRestoredObservable.add((() => {
              for (const YY of [...this.geometries, ...this.meshes, ...this.textures]) YY._rebuild()
            }));
          this.release = () => {
            YY.wT.remove(DY), rY.onContextRestoredObservable.remove(FY)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const YY of this.meshes) this.LQ.WDY(YY);
          for (const YY of this.materials) this.LQ.addMaterial(YY);
          for (const YY of this.geometries) this.LQ.addGeometry(YY);
          for (const YY of this.transformNodes) this.LQ.addTransformNode(YY);
          for (const YY of this.textures) this.LQ.addTexture(YY)
        }
      }
      dispose() {
        var YY;
        for (const rY of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const YY of rY.slice()) YY.dispose();
          rY.length = 0
        }
        null === (YY = this.release) || void 0 === YY || YY.call(this), this.release = null
      }
    }
    class or {
      constructor(YY, rY, DY, FY, AY, IY, RY) {
        this.asset = YY, this.LQ = rY, this.tree = DY, this.geometryData = AY, this.materials = IY, this.lite = RY, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = FY ? DY : null
      }
      create(YY) {
        if (this.lite) return YY();
        const rY = this.LQ;
        rY._blockEntityCollection = !!this.container;
        try {
          const rY = YY();
          return this.container && (rY._parentContainer = this.container), rY
        } finally {
          rY._blockEntityCollection = !1
        }
      }
      node(YY, rY) {
        return this.create((() => this.lite ? rY ? (0, Or.f)(this.lite, YY) : (0, Or.x)(this.lite, YY) : rY ? new((0, LY.b)().Mesh)(YY, this.LQ) : new((0, LY.b)().TransformNode)(YY, this.LQ)))
      }
      async load() {
        var YY;
        this.asset.model.json.nodes && this.createRoot();
        const rY = this.lite ? null : this.LQ,
          DY = null !== (YY = null === rY || void 0 === rY ? void 0 : rY.blockMaterialDirtyMechanism) && void 0 !== YY && YY;
        let FY;
        rY && (rY.blockMaterialDirtyMechanism = !0);
        try {
          FY = this.loadScene()
        } finally {
          null === rY || void 0 === rY || rY._forceBlockMaterialDirtyMechanism(DY)
        }
        await FY;
        const {
          root: AY,
          tree: IY
        } = this;
        AY && (AY.mV(!0), IY.meshes.push(AY), IY.rootNodes.push(AY));
        for (const OY of this.asset.model.nodes) {
          const YY = this.nodeObjects.get(OY.index);
          YY && ["TransformNode", "LiteNode"].includes(YY.getClassName()) && IY.transformNodes.push(YY);
          for (const rY of null !== (RY = this.nodePrimitives.get(OY.index)) && void 0 !== RY ? RY : []) {
            var RY;
            IY.meshes.push(rY);
            const YY = rY.geometry;
            YY && !IY.geometries.includes(YY) && IY.geometries.push(YY)
          }
        }
      }
      createRoot() {
        const YY = this.node("__root__", !0);
        this.root = YY, YY.mV(!1), this.LQ.useRightHandedSystem || yr(wY, YY)
      }
      loadScene() {
        const YY = [];
        for (const rY of this.asset.model.rootNodes) YY.push(this.loadNode(this.asset.model.nodes[rY], (YY => {
          YY.parent = this.root
        })));
        return YY.push(Promise.resolve()), Promise.all(YY).then((() => {}))
      }
      loadNode(YY, rY) {
        const DY = `/nodes/${YY.index}`,
          FY = [],
          AY = AY => {
            if (sr(AY, DY), yr(YY, AY), YY.hasCamera && !this.LQ.useRightHandedSystem) {
              const {
                pa: YY
              } = AY;
              YY.set(-1, YY.y, YY.z)
            }
            for (const rY of YY.children) FY.push(this.loadNode(this.asset.model.nodes[rY], (YY => {
              YY.parent = AY
            })));
            (DY => {
              ir(DY, YY.extras), rY(DY)
            })(AY)
          };
        if (null === YY.mesh) {
          const rY = this.node(MY(YY), !1);
          this.nodeObjects.set(YY.index, rY), AY(rY)
        } else {
          const rY = this.asset.model.meshes[YY.mesh];
          FY.push(this.loadMesh(`/meshes/${rY.index}`, YY, rY, AY))
        }
        return Promise.all(FY).then((() => {
          for (const DY of null !== (rY = this.nodePrimitives.get(YY.index)) && void 0 !== rY ? rY : []) {
            var rY;
            Dr(DY)
          }
          return this.nodeObjects.get(YY.index)
        }))
      }
      loadMesh(YY, rY, DY, FY) {
        const AY = [],
          IY = MY(rY);
        if (1 === DY.primitives.length) {
          const FY = DY.primitives[0];
          AY.push(this.loadPrimitive(`${YY}/primitives/${FY.index}`, IY, FY, (YY => {
            this.nodeObjects.set(rY.index, YY), this.nodePrimitives.set(rY.index, [YY])
          })))
        } else {
          const FY = this.node(IY, !1);
          this.nodeObjects.set(rY.index, FY);
          const RY = [];
          this.nodePrimitives.set(rY.index, RY);
          for (const rY of DY.primitives) AY.push(this.loadPrimitive(`${YY}/primitives/${rY.index}`, `${IY}_primitive${rY.index}`, rY, (YY => {
            YY.parent = FY, RY.push(YY)
          })))
        }
        const RY = this.nodeObjects.get(rY.index);
        return FY(RY), Promise.all(AY).then((() => RY))
      }
      loadPrimitive(YY, rY, DY, FY) {
        const AY = [],
          IY = this.node(rY, !0);
        if (IY.sideOrientation = this.LQ.useRightHandedSystem ? gr.b.CounterClockWiseSideOrientation : gr.b.ClockWiseSideOrientation, AY.push(this.geometryData.load(YY, DY, IY).then((YY => {
            if ((0, tY.g)(IY)) {
              var rY, DY;
              const FY = YY;
              IY.replaceModel(FY, Int32Array.of(0, null !== (rY = null === (DY = FY.indexData) || void 0 === DY ? void 0 : DY.length) && void 0 !== rY ? rY : FY.vertexCount, 0, FY.vertexCount))
            } else this.create((() => (YY.applyToMesh(IY), YY)))
          }))), this.materials) {
          const YY = 0 === DY.mode ? gr.b.PointListDrawMode : gr.b.TriangleFillMode,
            rY = null === DY.material ? null : this.asset.model.materials[DY.material];
          AY.push(this.loadMaterial(rY, YY, (YY => {
            IY.material = YY
          })))
        }
        return sr(IY, YY), FY(IY), Promise.all(AY).then((() => IY))
      }
      loadMaterial(YY, rY, DY) {
        var FY;
        const AY = `${null!==(FY=null===YY||void 0===YY?void 0:YY.index)&&void 0!==FY?FY:"default"}:${rY}`;
        let IY = this.materialData.get(AY);
        return IY || (IY = this.createMaterial(YY, rY), this.materialData.set(AY, IY)), DY(IY.material), IY.promise
      }
      createMaterial(YY, rY) {
        const DY = YY ? YY.name || `material${YY.index}` : "__GLTFLoader._default",
          {
            style: FY,
            unlit: AY
          } = this.materials;
        let IY;
        const RY = this.create((() => {
          const RY = (0, ur.c)({
            name: DY,
            LQ: this.LQ,
            sets: {
              ...(0, Yr.b)(this.asset, YY, FY, AY),
              fillMode: rY
            },
            unrendered: !0
          });
          return IY = RY.model, RY.mirror
        }));
        let OY = Promise.resolve();
        if (YY) {
          const rY = `/materials/${YY.index}`,
            FY = IY.diffuseTexture;
          if (FY && !FY.mirror) OY = new Promise((YY => setTimeout(YY)));
          else if (FY) {
            const AY = FY.mirror;
            AY._parentContainer = this.container, AY.name = `${DY} (Base Color)`, sr(AY, `${rY}${YY.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(AY), OY = (0, ar.x)(FY)
          }
          ir(RY, YY.extras), sr(RY, rY)
        }
        return this.tree.materials.push(RY), {
          material: RY,
          promise: OY
        }
      }
    }

    function Wr() {
      Ir.g.dracoDecodes = QY.decodes, Ir.g.dracoWorkersStarted = QY.workersStarted, Ir.g.dracoMostWorkers = QY.mostWorkers
    }
    async function Er(YY, rY, DY, AY, IY) {
      try {
        return await async function(YY, rY, DY, AY, IY, RY) {
          var OY;
          let gY;
          const aY = null === (OY = (0, vr.e)()) || void 0 === OY ? void 0 : OY.sQ,
            vY = null !== aY && void 0 !== aY && aY.iQ && rY === aY.hT() ? aY : null,
            uY = IY && !vY;
          return await UY(YY, rY, DY, AY, FY.c, (YY => (gY = new Qr(rY, uY), new or(YY, rY, gY, uY, new Fr(rY, AY), RY, vY).load())), !IY), gY
        }(YY, rY, DY, SY, AY, IY)
      } finally {
        Wr()
      }
    }
    async function mr(YY, rY, DY, AY) {
      try {
        return await UY(YY, rY, DY, SY, FY.c, (YY => AY(YY, new Fr(rY, SY))))
      } finally {
        Wr()
      }
    }
    Ar = AY.d, vY || (vY = {
      scriptUrl: new URL(Ar.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Ar.wasmBinaryUrl, location.href).href
    })
  },
  40555: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(144),
      AY = DY(1224);

    function IY(YY) {
      return (0, FY.b)() ? `https://${AY.e.discordDomain}/${YY.href}` : YY.href
    }
    const RY = {
      scriptUrl: IY(new DY.U(DY(40561))),
      wasmBinaryUrl: IY(new DY.U(DY(40567)))
    }
  },
  35721: YY => {
    YY.exports = function(YY, rY, DY, FY) {
      var AY = self || window;
      try {
        try {
          var IY;
          try {
            IY = new AY.Blob([YY])
          } catch (aY) {
            (IY = new(AY.BlobBuilder || AY.WebKitBlobBuilder || AY.MozBlobBuilder || AY.MSBlobBuilder)).append(YY), IY = IY.getBlob()
          }
          var RY = AY.URL || AY.webkitURL,
            OY = RY.createObjectURL(IY),
            gY = new AY[rY](OY, DY);
          return RY.revokeObjectURL(OY), gY
        } catch (aY) {
          return new AY[rY]("data:application/javascript,".concat(encodeURIComponent(YY)), DY)
        }
      } catch (aY) {
        if (!FY) throw Error("Inline worker is not supported");
        return new AY[rY](FY, DY)
      }
    }
  },
  40567: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  40561: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);